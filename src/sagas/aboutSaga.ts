import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { IBaseData } from '../interfaces/interfaces';
import { update_about, update_loader } from '../redux/symbols';


/**
 * Get Default About Information 
 */
function* getAbout() {
    yield put({ type: update_loader, payload: true });
    
    const aboutShot = yield call(firestore.getDocument, `about/${defaultUser}`);
    const timelineShot = yield call(firestore.getCollection, `about/${defaultUser}/timeline`);

    const about = aboutShot.data();

    const payload: IBaseData = {
        description: about.description,
        timeline: []
    }

    timelineShot.forEach((shot: any) => {
        const doc = shot.data();
        payload.timeline.push(doc)
    })

    yield put({ type: update_about, payload });

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Default About Information 
 */
export function* handleGetAbout() {
    yield takeEvery('GET_ABOUT', getAbout)
}