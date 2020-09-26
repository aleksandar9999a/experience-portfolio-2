import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { IProject } from '../interfaces/interfaces';
import { update_loader, update_project, update_projects } from '../redux/symbols';

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