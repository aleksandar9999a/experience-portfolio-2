import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'

function* getMainInfo() {
    const snapshot = yield call(firestore.getDocument, `users/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: 'UPDATE_MAININFO', payload })
}

export function* handleGetMainInfo() {
    yield takeEvery('GET_MAININFO', getMainInfo)
}