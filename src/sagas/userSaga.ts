import { put, takeEvery, call, take } from 'redux-saga/effects'
import { auth } from '../firebase'
import isEmail from 'validator/lib/isEmail';
import { remove_user, update_loader, update_user } from '../redux/symbols';

/**
 * User Login
 * 
 * @param {ReduxAction} action 
 * 
 * @return {Void}
 */
function* userLogin({ payload }: { type: string, payload: { email: string, password: string } }) {
    yield put({ type: update_loader, payload: true });

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

    yield put({ type: update_loader, payload: false });
}

/**
 * Handle User Login
 */
export function* handleUserLogin() {
    yield takeEvery('USER_LOGIN', userLogin)
}

/**
 * Auth Change
 * 
 * @returns {Void}
 */
function* authChange() {
    const channel = yield call(auth.channel);
    const { error, user } = yield take(channel);

    if (error) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
    } else {
        yield put({ type: update_user, payload: user });
    }
}

/**
 * Handle auth change
 */
export function* handleAuthChange() {
    yield takeEvery('AUTH_CHANGE', authChange)
}

/**
 * Logout
 * 
 * @returns {Void}
 */
function* logout() {
    yield put({ type: update_loader, payload: true });

    try {
        yield call(auth.signOut);
        yield put({ type: remove_user });
        yield put({ type: 'ADD_SUCCESS_NOTIFICATION', payload: 'Successful logout!' });
        window.history.pushState(null, '', '/');
        window.dispatchEvent(new Event('locationchange'));
        yield put({ type: update_loader, payload: false });
    }
    catch (error) {
        yield put({ type: 'ADD_ERROR_NOTIFICATION', payload: error.message });
        yield put({ type: update_loader, payload: false });
    }
}

/**
 * Handle Logout
 */
export function* handleLogout() {
    yield takeEvery('USER_LOGOUT', logout)
}