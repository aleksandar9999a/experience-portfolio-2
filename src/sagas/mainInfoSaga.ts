import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_loader, update_maininfo } from '../redux/symbols';
import { store } from './../redux/store';


/**
 * Get Default Main Information 
 */
function* getMainInfo() {
    yield put({ type: update_loader, payload: true });

    let state = store.getState().mainInfo

    if (!state.firstName) {
        const infoShot = yield call(firestore.getDocument, `users/${defaultUser}`);
        const info = infoShot.data();

        state = {
            ...state,
            ...info
        }
    }

    if (state.socials.length === 0) {
        const socialsShot = yield call(firestore.getCollection, `users/${defaultUser}/socials`);
        socialsShot.forEach((shot: any) => {
            const data = shot.data();
            state.socials.push(data);
        })
    }

    if (state.projects.length === 0) {
        const projectsShot = yield call(firestore.getCollection, `users/${defaultUser}/projects`);
        projectsShot.forEach((shot: any) => {
            const data = shot.data();
            state.projects.push(data);
        })
    }


    yield put({ type: update_maininfo, payload: state });
    
    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Default Main Information 
 */
export function* handleGetMainInfo() {
    yield takeEvery('GET_MAININFO', getMainInfo)
}