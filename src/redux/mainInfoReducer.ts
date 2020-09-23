import { IUser } from "../interfaces/interfaces";
import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState: IUser = {
    firstName: '',
    lastName: '',
    devType: ''
}

const update = createAction('UPDATE_MAININFO')

const mainInfoReducer = createReducer(initialState, (builder) => {
    builder.addCase(update, (state, action) => {
        return { ...state, ...action.payload as any as IUser }
    })
})

export default mainInfoReducer;