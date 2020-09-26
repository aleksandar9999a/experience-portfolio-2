import { IUser } from "../interfaces/interfaces";
import { createReducer } from '@reduxjs/toolkit';
import { update_maininfo } from './symbols';

const initialState: IUser = {
    firstName: '',
    lastName: '',
    devType: ''
}

const mainInfoReducer = createReducer(initialState, {
    [update_maininfo]: (state, { payload }) => { 
        return { ...state, ...payload } 
    }
})

export default mainInfoReducer;