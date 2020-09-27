import mainInfoReducer from './mainInfoReducer';
import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer';
import skillsReducer from './skillsReducer';
import aboutReducer from './aboutReducer';
import userReducer from './userReducer';
import loadReducer from './loadReducer';
import notificationsReducer from './notificationsReducer';
import projectReducer from './projectReducer';
import createProjectReducer from './createProjectReducer';

export const allReducers = combineReducers({
    mainInfo: mainInfoReducer,
    projects: projectsReducer,
    skills: skillsReducer,
    about: aboutReducer,
    user: userReducer,
    load: loadReducer,
    notifications: notificationsReducer,
    currentProject: projectReducer,
    createProject: createProjectReducer
})