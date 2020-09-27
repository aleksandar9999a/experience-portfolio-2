import { createReducer } from '@reduxjs/toolkit';
import { IProject } from '../interfaces/interfaces';
import { add_images_create_project, clear_create_project, update_create_project, } from './symbols';

const initialState: IProject = {
    id: '',
    title: '',
    description: '',
    link: '',
    creatorId: '',
    images: [],
    cover: ''
};

const createProjectReducer = createReducer(initialState, {
    [update_create_project]: (state, { payload }) => {
        return { ...state, ...payload }
    },
    [clear_create_project]: (_, action) => initialState,
    [add_images_create_project]: (state, { payload }) => {
        return {
            ...state,
            images: [...state.images, payload]
        }
    }
})

export default createProjectReducer;