import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const update = createAction('UPDATE_LOAD')

const loadReducer = createReducer(initialState, (builder) => {
    builder.addCase(update, (_, action) => {
        return action.payload
    })
})

export default loadReducer;