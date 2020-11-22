import { createReducer } from '@reduxjs/toolkit';
import { remove_user, update_user } from './symbols';

const initialState: null | { [key: string]: any } = null;

const userReducer = createReducer(initialState, {
    [update_user]: (state, { payload }) => {
        return !!state
            ? { ...state as any, ...payload }
            : payload
    },
    [remove_user]: () => null
})

export default userReducer;