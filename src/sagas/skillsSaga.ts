import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { update_loader, update_skills } from '../redux/symbols';

/**
 * Get Default Skills Information 
 */
function* getSkills() {
    yield put({ type: update_loader, payload: true });
    
    const snapshot = yield call(firestore.getDocument, `skills/${defaultUser}`);
    const payload = snapshot.data();

    yield put({ type: update_skills, payload })

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Default Skills Information 
 */
export function* handleGetSkills() {
    yield takeEvery('GET_SKILLS', getSkills)
}