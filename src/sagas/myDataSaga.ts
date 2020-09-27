import { put, takeEvery, call } from 'redux-saga/effects'
import { firestore } from '../firebase'
import { IBaseUserInfo, IEmail, ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { update_loader, update_mydata } from '../redux/symbols';


/**
 * Get My Data
 */
function* getMyData() {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    const infoShot = yield call(firestore.getDocument, `users/${uid}`);
    const socialsShot = yield call(firestore.getCollection, `users/${uid}/socials`);
    const projectsShot = yield call(firestore.getCollection, `users/${uid}/projects`);
    const contactsShot = yield call(firestore.getCollection, `users/${uid}/emails`);
    const info = infoShot.data();

    const payload = {
        ...info,
        socials: [],
        projects: [],
        contacts: []
    }

    socialsShot.forEach((shot: any) => {
        const data = shot.data();
        payload.socials.push(data);
    })

    projectsShot.forEach((shot: any) => {
        const data = shot.data();
        payload.projects.push(data);
    })

    contactsShot.forEach((shot: any) => {
        const data = shot.data();
        payload.contacts.push(data);
    })

    yield put({ type: update_mydata, payload });

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get My Data 
 */
export function* handleGetMyData() {
    yield takeEvery('GET_MY_DATA', getMyData)
}

/**
 * Submit Userdata
 * 
 * @param {ReduxAction} action
 * 
 * @return {Void}
 */
function* submitUserdata({ payload }: { type: string, payload: IBaseUserInfo }) {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    if (payload.firstName.length < 4 || payload.firstName.length > 21) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid first name! Minimum length is 4 characters, max - 20.' });
    } else if (payload.lastName.length < 4 || payload.lastName.length > 21) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid last name! Minimum length is 4 characters, max - 20.' });
    } else if (payload.about.length < 20 || payload.about.length > 601) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid About! Minimum length is 20 characters, max - 600.' });
    } else if (payload.skills.length < 20 || payload.skills.length > 601) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid Skills! Minimum length is 20 characters, max - 600.' });
    } else if (payload.devType.length < 4 || payload.devType.length > 21) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid Developer Type! Minimum length is 4 characters, max - 20.' });
    } else {
        try {
            yield call(firestore.setDocument, `users/${uid}`, payload, { merge: true });
            yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful submited!' });
        } catch (error) {
            yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
        }
    }

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Submit Userdata
 */
export function* handleSubmitUserdata() {
    yield takeEvery('SUBMIT_USERDATA', submitUserdata);
}

/**
 * Submit Skills Timeline
 * 
 * @param {ReduxAction} action
 */
function* submitSkillsTimeline({ payload }: { type: string, payload: ITimelineItems[] }) {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    try {
        yield call(firestore.setDocument, `users/${uid}`, { skillsTimeline: payload }, { merge: true });
    } catch (error) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
    }

    yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful submited!' });
    yield put({ type: update_loader, payload: false });
}

/**
 * Submit About Timeline
 * 
 * @param {ReduxAction} action
 */
function* submitAboutTimeline({ payload }: { type: string, payload: ITimelineItems[] }) {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    try {
        yield call(firestore.setDocument, `users/${uid}`, { aboutTimeline: payload }, { merge: true });
    } catch (error) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
    }

    yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful submited!' });
    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Submit Skills Timeline
 */
export function* handleSubmitSkillsTimeline() {
    yield takeEvery('SKILLS_TIMELINE_SUBMIT', submitSkillsTimeline);
}

/**
 * Handle Submit About Timeline
 */
export function* handleSubmitAboutTimeline() {
    yield takeEvery('ABOUT_TIMELINE_SUBMIT', submitAboutTimeline);
}

/**
 * Update Contact
 * 
 * @param {ReduxAction}
 * 
 * @return {Void}
 */
function* updateContact({ payload }: { type: string, payload: IEmail }) {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    try {
        yield call(firestore.setDocument, `users/${uid}/emails/${payload.id}`, payload, { merge: true });
        yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful Updated!' });
        yield put({ type: 'GET_MY_DATA' });
    } catch (error) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
    }

    yield put({ type: update_loader, payload: false });
}

/**
 * Remove Contact
 * 
 * @param {ReduxAction}
 * 
 * @return {Void}
 */
function* removeContact({ payload }: { type: string, payload: string }) {
    yield put({ type: update_loader, payload: true });

    const uid = (store as any).getState().user.uid;

    try {
        yield call(firestore.deleteDocument, `users/${uid}/emails/${payload}`);
        yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful Deleted!' });
        yield put({ type: 'GET_MY_DATA' });
    } catch (error) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
    }

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Update Contact
 */
export function* handleUpdateContact() {
    yield takeEvery('UPDATE_CONTACT', updateContact);
}

/**
 * Handle Remove Contact
 */
export function* handleRemoveContact() {
    yield takeEvery('REMOVE_CONTACT', removeContact);
}