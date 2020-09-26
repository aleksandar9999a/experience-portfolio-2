import { IBaseData } from "../interfaces/interfaces";
import { createReducer } from '@reduxjs/toolkit';
import { update_skills } from "./symbols";

const initialState: IBaseData = {
    description: '',
    timeline: [],
}

const skillsReducer = createReducer(initialState, {
    [update_skills]: (state, { payload }) => {
        return { ...state, ...payload }
    }
})

export default skillsReducer;