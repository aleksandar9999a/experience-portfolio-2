import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_maininfo } from '../redux/symbols';

function* getMainInfo() {
    const snapshot = yield call(firestore.getDocument, `users/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_maininfo, payload })
}

export function* handleGetMainInfo() {
    yield takeEvery('GET_MAININFO', getMainInfo)
}