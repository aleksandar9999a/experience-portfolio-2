import { createReducer } from '@reduxjs/toolkit';
import { IProject } from '../interfaces/interfaces';

import {
    add_images_create_project,
    clear_create_project,
    remove_images_create_project,
    set_cover_create_project,
    update_create_project
} from './symbols';

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
    [clear_create_project]: () => initialState,
    [add_images_create_project]: (state, { payload }) => {
        return {
            ...state,
            images: [...state.images, ...payload]
        }
    },
    [remove_images_create_project]: (state, { payload }) => {
        const images = state.images.filter(img => {
            return img.id !== payload;
        });

        return {
            ...state,
            images
        }
    },
    [set_cover_create_project]: (state, { payload }) => {
        const cover = state.images.find(img => {
            return img.id === payload;
        });

        return {
            ...state,
            cover: cover!.url
        }
    }
})

export default createProjectReducer;