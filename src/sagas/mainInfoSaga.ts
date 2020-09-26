import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_maininfo } from '../redux/symbols';


/**
 * Get Default Main Information 
 */
function* getMainInfo() {
    const snapshot = yield call(firestore.getDocument, `users/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_maininfo, payload })
}

/**
 * Handle Get Default Main Information 
 */
export function* handleGetMainInfo() {
    yield takeEvery('GET_MAININFO', getMainInfo)
}