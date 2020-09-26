import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'

function* userLogin({ payload }: { type: string, payload: { email: string, password: string }}) {
    console.log(payload)
    // const snapshot = yield call(firestore.getDocument, `skills/${defaultUser}`);
    // const payload = snapshot.data();

    // yield put({ type: 'UPDATE_SKILLS', payload })
}

export function* handleUserLogin() {
    yield takeEvery('USER_LOGIN', userLogin)
}