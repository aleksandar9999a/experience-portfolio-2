import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_about, update_loader } from '../redux/symbols';


/**
 * Get Default About Information 
 */
function* getAbout() {
    yield put({ type: update_loader, payload: true });
    
    const snapshot = yield call(firestore.getDocument, `about/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_about, payload });

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Default About Information 
 */
export function* handleGetAbout() {
    yield takeEvery('GET_ABOUT', getAbout)
}