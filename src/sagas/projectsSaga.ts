import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'

function* getProjects() {
    const snapshot = yield call(firestore.getDocument, `projects/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: 'UPDATE_PROJECTS', payload })
}

export function* handleGetProjects() {
    yield takeEvery('GET_PROJECTS', getProjects)
}