import { put, takeEvery } from 'redux-saga/effects'

function* load({ payload }: { type: string, payload: boolean }) {
    yield put({ type: 'UPDATE_LOAD', payload })
}

export function* handleLoad() {
    yield takeEvery('LOAD', load)
}