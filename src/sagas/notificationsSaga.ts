import { put, takeEvery } from 'redux-saga/effects'
import uid from 'uid';
import { add_notification, remove_notification } from '../redux/symbols';

function delay(time: number) {
    return new Promise(res => setTimeout(res, time))
}

function* addWarningNotification({ payload }: { type: string, payload: string }) {
    const notification = {
        id: uid(),
        message: payload,
        type: 'warning'
    }

    yield put({ type: add_notification, payload: notification });
    yield delay(3000);
    yield put({ type: remove_notification, payload: notification.id });
}

export function* handleAddWarningNotification() {
    yield takeEvery('ADD_WARNING_NOTIFICATION', addWarningNotification)
}

function* addErrorNotification({ payload }: { type: string, payload: string }) {
    const notification = {
        id: uid(),
        message: payload,
        type: 'error'
    }

    yield put({ type: add_notification, payload: notification });
    yield delay(3000);
    yield put({ type: remove_notification, payload: notification.id });
}

export function* handleAddErrorNotification() {
    yield takeEvery('ADD_ERROR_NOTIFICATION', addErrorNotification)
}

function* addSuccessNotification({ payload }: { type: string, payload: string }) {
    const notification = {
        id: uid(),
        message: payload,
        type: 'success'
    }

    yield put({ type: add_notification, payload: notification });
    yield delay(3000);
    yield put({ type: remove_notification, payload: notification.id });
}

export function* handleAddSuccessNotification() {
    yield takeEvery('ADD_SUCCESS_NOTIFICATION', addSuccessNotification)
}