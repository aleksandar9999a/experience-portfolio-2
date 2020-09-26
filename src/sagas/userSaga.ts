import { put, takeEvery, call } from 'redux-saga/effects'
import { auth } from '../firebase'
import isEmail from 'validator/lib/isEmail';
import { update_user } from '../redux/symbols';

function* userLogin({ payload }: { type: string, payload: { email: string, password: string } }) {
    const { email, password } = payload;

    if (!isEmail(email)) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid email!' });
    } else if (password.length < 8 || password.length > 25) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: 'Invalid password! Minimum length is 8 characters - max 25.' });
    } else {
        try {
            const data = yield call(auth.signInWithEmailAndPassword, email, password)
            yield put({ type: update_user, payload: data });
            yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successfull login!' });
            window.history.pushState(null, '', '/');
            window.dispatchEvent(new Event('locationchange'));
        }
        catch (err) {
            yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: err.message });
        }
    }
}

export function* handleUserLogin() {
    yield takeEvery('USER_LOGIN', userLogin)
}