import { put, takeEvery, call } from 'redux-saga/effects';
import { defaultUser } from '../config/firebase_config';
import uid from 'uid';;
import { firestore, storage } from '../firebase';
import { IProject } from '../interfaces/interfaces';
import { add_images_create_project, update_loader, update_project, update_projects } from '../redux/symbols';
import { eventChannel } from 'redux-saga';

/**
 * Get Projects Information 
 */
function* getProjects() {
    yield put({ type: update_loader, payload: true });

    const snapshot = yield call(firestore.getCollection, `projects/${defaultUser}/projects`);

    let projects: IProject[] = [];

    snapshot.forEach((doc: any) => {
        const data = doc.data();
        projects = [...projects, data];
    })

    yield put({ type: update_projects, payload: projects });

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Projects Information 
 */
export function* handleGetProjects() {
    yield takeEvery('GET_PROJECTS', getProjects);
}

/**
 * Get Project
 */
function* getProject({ payload }: { type: string, payload: string }) {
    yield put({ type: update_loader, payload: true });

    const snapshot = yield call(firestore.getDocument, `projects/${defaultUser}/projects/${payload}`);
    const data = snapshot.data();

    yield put({ type: update_project, payload: data });

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Project
 */
export function* handleGetProject() {
    yield takeEvery('GET_PROJECT', getProject);
}

/**
 * Upload Images
 * 
 * @param {ReduxAction} action
 * 
 * @return {Void}
 */
function* uploadImages({ payload }: { type: string, payload: File[] }) {
    for (let i = 0; i < payload.length; i++) {
        const file = payload[i];
        const id = uid();

        const task = storage.uploadFile(id, file);
        const channel = eventChannel(emit => {
            task.on('state_changed', emit);
            return () => { };
        })
        
        yield takeEvery(channel, addImage.bind(undefined, id));
    }
}

/**
 * Add image
 * 
 * @param {String} id 
 * @param {UploadTaskSnapshot} shot 
 * 
 * @return {Void}
 */
function* addImage(id: string, shot:firebase.storage.UploadTaskSnapshot) {
    if(shot.bytesTransferred === shot.totalBytes) {
        const url = yield call(storage.getDownloadURL, id);

        yield put({ type: add_images_create_project, payload: { id, url }});
    }
}

/**
 * Handle upload images
 */
export function* handleUploadImages() {
    yield takeEvery('UPLOAD_IMAGES', uploadImages);
}