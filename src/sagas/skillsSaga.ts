import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_skills } from '../redux/symbols';

function* getSkills() {
    const snapshot = yield call(firestore.getDocument, `skills/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_skills, payload })
}

export function* handleGetSkills() {
    yield takeEvery('GET_SKILLS', getSkills)
}