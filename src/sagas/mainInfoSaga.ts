import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_loader, update_maininfo } from '../redux/symbols';


/**
 * Get Default Main Information 
 */
function* getMainInfo() {
    yield put({ type: update_loader, payload: true });

    const infoShot = yield call(firestore.getDocument, `users/${defaultUser}`);
    const socialsShot = yield call(firestore.getCollection, `users/${defaultUser}/socials`);
    const projectsShot = yield call(firestore.getCollection, `users/${defaultUser}/projects`);
    const info = infoShot.data();

    const payload = {
        ...info,
        socials: [],
        projects: []
    }

    socialsShot.forEach((shot: any) => {
        const data = shot.data();
        payload.socials.push(data);
    })

    projectsShot.forEach((shot: any) => {
        const data = shot.data();
        payload.projects.push(data);
    })

    yield put({ type: update_maininfo, payload });
    
    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Default Main Information 
 */
export function* handleGetMainInfo() {
    yield takeEvery('GET_MAININFO', getMainInfo)
}