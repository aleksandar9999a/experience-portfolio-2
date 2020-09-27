import { IAuthUser } from "../interfaces/interfaces";
import { createReducer } from '@reduxjs/toolkit';
import { update_mydata } from './symbols';

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
    }
})

export default myDataReducer;