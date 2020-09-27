import { IAuthUser } from "../interfaces/interfaces";
import { createReducer } from '@reduxjs/toolkit';
import { update_mydata, update_skills_timeline, update_about_timeline } from './symbols';

const initialState: IAuthUser = {
    firstName: '',
    lastName: '',
    devType: '',
    about: '',
    skills: '',
    socials: [],
    aboutTimeline: [],
    skillsTimeline: [],
    projects: [],
    contacts: []
}

const myDataReducer = createReducer(initialState, {
    [update_mydata]: (state, { payload }) => {
        return { ...state, ...payload }
    },
    [update_skills_timeline]: (state, { payload }) => {
        return {
            ...state,
            skillsTimeline: payload
        }
    },
    [update_about_timeline]: (state, { payload }) => {
        return {
            ...state,
            aboutTimeline: payload
        }
    }
})

export default myDataReducer;