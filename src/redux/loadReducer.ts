import { createReducer } from '@reduxjs/toolkit';
import { update_loader } from './symbols';

const initialState: boolean = false;

const loadReducer = createReducer(initialState, {
    [update_loader]: (_, { payload }) => payload
})

export default loadReducer;