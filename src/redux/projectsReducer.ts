import { createReducer } from '@reduxjs/toolkit';
import { update_projects } from './symbols';

const initialState: any = {};

const projectsReducer = createReducer(initialState, {
    [update_projects]: (_, { payload }) => {
        return payload;
    }
})

export default projectsReducer;