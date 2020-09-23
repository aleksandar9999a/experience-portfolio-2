import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState: any = {};

const update = createAction('UPDATE_PROJECTS')

const projectsReducer = createReducer(initialState, (builder) => {
    builder.addCase(update, (state, action) => {
        return action.payload
    })
})

export default projectsReducer;