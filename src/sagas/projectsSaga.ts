import { put, takeEvery, call } from 'redux-saga/effects';
import uid from 'uid';;
import { firestore, storage } from '../firebase';
import { IProject } from '../interfaces/interfaces';
import { add_images_create_project, update_create_project, update_loader, update_project } from '../redux/symbols';
import { eventChannel } from 'redux-saga';
import { store } from '../redux/store';

/**
 * Get Projects Information 
 */
function* getProjects() {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    const snapshot = yield call(firestore.getCollection, `users/${uid}/projects`);

    let projects: IProject[] = [];

    snapshot.forEach((doc: any) => {
        const data = doc.data();
        projects = [...projects, data];
    })

    // yield put({ type: update_projects, payload: projects });

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
function* getProject({ payload }: { type: string, payload: { creatorId: string, id: string } }) {
    yield put({ type: update_loader, payload: true });

    const snapshot = yield call(firestore.getDocument, `users/${payload.creatorId}/projects/${payload.id}`);
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
function* addImage(id: string, shot: firebase.storage.UploadTaskSnapshot) {
    if (shot.bytesTransferred === shot.totalBytes) {
        const url = yield call(storage.getDownloadURL, id);

        yield put({ type: add_images_create_project, payload: { id, url } });
    }
}

/**
 * Handle Upload Images
 */
export function* handleUploadImages() {
    yield takeEvery('UPLOAD_IMAGES', uploadImages);
}

/**
 * Submit Project
 * 
 * @param {ReduxAction} action
 * 
 * @return {Void}
 */
function* submitProject({ payload }: { type: string, payload: IProject }) {
    yield put({ type: update_loader, payload: true });
    const project = { ...payload };

    if (project.id === '') {
        project.id = uid();
        project.creatorId = (store as any).getState().user.uid;
    }

    if (project.title.length < 4 || project.title.length > 41) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid title! Minimum characters are 4, max - 40/' });
    } else if (project.description.length < 10 || project.description.length > 401) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid description! Minimum characters are 10, max - 400.' });
    } else if (!project.link.includes('http')) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid link format!' });
    } else {
        yield call(firestore.setDocument, `users/${project.creatorId}/projects/${project.id}`, project, {});
        yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful uploaded!' });
        window.history.pushState(null, '', '/');
        window.dispatchEvent(new Event('locationchange'));
    }

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Submit Project
 */
export function* handleSubmitProject() {
    yield takeEvery('SUBMIT_PROJECT', submitProject);
}

/**
 * Load Created Project
 * 
 * @param {ReduxAction} action
 * 
 * @return {Void}
 */
function* loadCreatedProject({ payload }: { type: string, payload: { creatorId: string, id: string } }) {
    yield put({ type: update_loader, payload: true });

    const snapshot = yield call(firestore.getDocument, `users/${payload.creatorId}/projects/${payload.id}`);
    const data = snapshot.data();

    yield put({ type: update_create_project, payload: data });

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Load Created Project
 */
export function* handleLoadCreateProject() {
    yield takeEvery('LOAD_CREATE_PROJECT', loadCreatedProject);
}

/**
 * Delete Project
 * 
 * @param {ReduxAction} action
 * 
 * @return {Void}
 */
function* deleteProject({ payload }: { type: string, payload: { creatorId: string, id: string } }) {
    yield put({ type: update_loader, payload: true });

    yield call(firestore.deleteDocument, `users/${payload.creatorId}/projects/${payload.id}`);

    yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful deleted!' });

    window.history.pushState(null, '', '/');
    window.dispatchEvent(new Event('locationchange'));

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Load Created Project
 */
export function* handleDeleteProject() {
    yield takeEvery('DELETE_PROJECT', deleteProject);
}