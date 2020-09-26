import { createReducer } from '@reduxjs/toolkit';
import { IProject } from '../interfaces/interfaces';
import { update_project } from './symbols';

const initialState: IProject = {
    id: '',
    title: '',
    description: '',
    link: '',
    creatorId: '',
    cover: '',
    images: []
}

const projectReducer = createReducer(initialState, {
    [update_project]: (_, { payload }) => {
        return payload;
    }
})

export default projectReducer;