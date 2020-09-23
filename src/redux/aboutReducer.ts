import { IBaseData } from "../interfaces/interfaces";
import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState: IBaseData = {
    description: '',
    timeline: [],
}

const update = createAction('UPDATE_ABOUT')

const aboutReducer = createReducer(initialState, (builder) => {
    builder.addCase(update, (state, action) => {
        return { ...state, ...action.payload as any as IBaseData }
    })
})

export default aboutReducer;