import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'

function* getSkills() {
    const snapshot = yield call(firestore.getDocument, `skills/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: 'UPDATE_SKILLS', payload })
}

export function* handleGetSkills() {
    yield takeEvery('GET_SKILLS', getSkills)
}