import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_projects } from '../redux/symbols';

function* getProjects() {
    const snapshot = yield call(firestore.getDocument, `projects/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_projects, payload })
}

export function* handleGetProjects() {
    yield takeEvery('GET_PROJECTS', getProjects)
}