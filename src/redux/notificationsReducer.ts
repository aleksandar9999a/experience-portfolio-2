import { INotification } from "../interfaces/interfaces";
import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState: INotification[] = []

const addSymbol = Symbol('ADD_NOTIFICATION');
// const add = createAction('ADD_NOTIFICATION')

const aboutReducer = createReducer(initialState, {
    [addSymbol]: (state, { payload }) => [...state, payload as any as INotification]
})


export default aboutReducer;