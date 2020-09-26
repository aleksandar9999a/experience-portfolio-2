import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_about } from '../redux/symbols';

function* getAbout() {
    const snapshot = yield call(firestore.getDocument, `about/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_about, payload })
}

export function* handleGetAbout() {
    yield takeEvery('GET_ABOUT', getAbout)
}