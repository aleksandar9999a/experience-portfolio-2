import { put, takeEvery, call } from 'redux-saga/effects';
import uid from 'uid';;
import { firestore } from '../firebase';
import { IProject } from '../interfaces/interfaces';
import {  update_create_project, update_loader, update_project } from '../redux/symbols';
import { store } from '../redux/store';


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