import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { IBaseData } from '../interfaces/interfaces';
import { update_loader, update_skills } from '../redux/symbols';

/**
 * Get Default Skills Information 
 */
function* getSkills() {
    yield put({ type: update_loader, payload: true });
    
    const skillsShot = yield call(firestore.getDocument, `skills/${defaultUser}`);
    const timelineShot = yield call(firestore.getCollection, `skills/${defaultUser}/timeline`);
    const skills = skillsShot.data();

    const payload: IBaseData = {
        description: skills.description,
        timeline: []
    }

    timelineShot.forEach((shot: any) => {
        const doc = shot.data();
        payload.timeline.push(doc)
    })

    yield put({ type: update_skills, payload })

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Get Default Skills Information 
 */
export function* handleGetSkills() {
    yield takeEvery('GET_SKILLS', getSkills)
}