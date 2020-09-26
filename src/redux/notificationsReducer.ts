import { INotification } from "../interfaces/interfaces";
import { createReducer } from '@reduxjs/toolkit';
import { add_notification, remove_notification } from "./symbols";

const initialState: INotification[] = []

const notificationsReducer = createReducer(initialState, {
    [add_notification]: (state, { payload }) => [payload, ...state],
    [remove_notification]: (state, { payload }) => {
        return state.filter(not => {
            return not.id !== payload;
        })
    }
})


export default notificationsReducer;