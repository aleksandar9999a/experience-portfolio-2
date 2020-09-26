import { createReducer } from '@reduxjs/toolkit';
import { IProject } from '../interfaces/interfaces';
import { update_projects } from './symbols';

const initialState: IProject[] = [];

const projectsReducer = createReducer(initialState, {
    [update_projects]: (_, { payload }) => {
        return payload;
    }
})

export default projectsReducer;