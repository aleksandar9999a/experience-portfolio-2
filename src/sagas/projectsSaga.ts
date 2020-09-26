import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { IProject } from '../interfaces/interfaces';
import { update_projects } from '../redux/symbols';

/**
 * Get Projects Information 
 */
function* getProjects() {
    const snapshot = yield call(firestore.getDocument, `projects/${defaultUser}`);
    const data = snapshot.data();

    const payload: IProject[] = Object.keys(data).reduce((acc: IProject[], key) => {
        return [...acc, data[key]];
    }, [])

    yield put({ type: update_projects, payload })
}

/**
 * Handle Get Projects Information 
 */
export function* handleGetProjects() {
    yield takeEvery('GET_PROJECTS', getProjects)
}