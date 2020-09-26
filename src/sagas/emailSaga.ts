import { put, takeEvery, call } from 'redux-saga/effects'
import { defaultUser } from '../config/firebase_config'
import { firestore } from '../firebase'
import { IEmail } from '../interfaces/interfaces';
import uid from 'uid';
import isEmail from 'validator/lib/isEmail';
import { update_loader } from '../redux/symbols';


/**
 * Send Email
 */
function* sendEmail({ payload }: { type: string, payload: IEmail }) {
    yield put({ type: update_loader, payload: true });

    const email: IEmail = {
        id: uid(),
        isAnswered: false,
        ...payload
    }

    if (!isEmail(email.email)) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid email!' });
    } else if (email.name.length < 4 || email.name.length > 51) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid name! Minimum lenght is 4 characters, max 50.' });
    } else if (email.subject.length < 4 || email.subject.length > 51) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid subject! Minimum lenght is 4 characters, max 50.' });
    } else if (email.message.length < 10 || email.message.length > 401) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid message! Minimum lenght is 10 characters, max 400.' });
    } else {
        try {
            yield call(firestore.setDocument, `users/${defaultUser}/emails/${email.id}`, email, {});
            yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful sended!' });
            window.history.pushState(null, '', '/');
            window.dispatchEvent(new Event('locationchange'));
        } catch(error) {
            yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
        }
    }

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle Send Email 
 */
export function* handleSendEmail() {
    yield takeEvery('SEND_EMAIL', sendEmail)
}