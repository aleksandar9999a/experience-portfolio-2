import { put, takeEvery } from 'redux-saga/effects'
import uid from 'uid';
import { INotification } from '../interfaces/interfaces';
import { add_notification, remove_notification } from '../redux/symbols';

/**
 * Delay
 * 
 * @param {Number} time 
 * 
 * @returns {Promise}
 */
function delay(time: number) {
    return new Promise(res => setTimeout(res, time))
}

/**
 * Submit Notification
 * 
 * @param {INotification} notification 
 * 
 * @returns {Void}
 */
function* submitNotification(notification: INotification) {
    yield put({ type: add_notification, payload: notification });
    yield delay(3000);
    yield put({ type: remove_notification, payload: notification.id });
}

/**
 * Create Notification
 * 
 * @param {String} message 
 * @param {String} type 
 * 
 * @returns {INotification}
 */
function createNotification(message: string, type: string) {
    return {
        id: uid(),
        message,
        type
    } as INotification
}

/**
 * Add Warning Notification
 * 
 * @param {ReduxAction} action 
 * 
 * @return {Void}
 */
function* addWarningNotification({ payload }: { type: string, payload: string }) {
    const notification = createNotification(payload, 'warning');

    yield submitNotification(notification);
}

/**
 * Handle Add Warning Notification
 * 
 * @returns {Void}
 */
export function* handleAddWarningNotification() {
    yield takeEvery('ADD_WARNING_NOTIFICATION', addWarningNotification)
}

/**
 * Add Error Notification
 * 
 * @param {ReduxAction} action 
 * 
 * @return {Void}
 */
function* addErrorNotification({ payload }: { type: string, payload: string }) {
    const notification = createNotification(payload, 'error');

    yield submitNotification(notification);
}

/**
 * Handle Add Error Notification
 * 
 * @returns {Void}
 */
export function* handleAddErrorNotification() {
    yield takeEvery('ADD_ERROR_NOTIFICATION', addErrorNotification)
}

/**
 * Add Success Notification
 * 
 * @param {ReduxAction} action 
 * 
 * @return {Void}
 */
function* addSuccessNotification({ payload }: { type: string, payload: string }) {
    const notification = createNotification(payload, 'success');

    yield submitNotification(notification);
}

/**
 * Handle Add Success Notification
 * 
 * @returns {Void}
 */
export function* handleAddSuccessNotification() {
    yield takeEvery('ADD_SUCCESS_NOTIFICATION', addSuccessNotification)
}