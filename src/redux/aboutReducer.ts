import { IBaseData } from "../interfaces/interfaces";
import { createReducer } from '@reduxjs/toolkit';
import { update_about } from "./symbols";

const initialState: IBaseData = {
    description: '',
    timeline: [],
}

const aboutReducer = createReducer(initialState, {
    [update_about]: (state, { payload }) => {
        return { ...state, ...payload }
    }
})

export default aboutReducer;