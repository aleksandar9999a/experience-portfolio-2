import mainInfoReducer from './mainInfoReducer';
import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer';
import skillsReducer from './skillsReducer';
import aboutReducer from './aboutReducer';

export const allReducers = combineReducers({
    mainInfo: mainInfoReducer,
    projects: projectsReducer,
    skills: skillsReducer,
    about: aboutReducer
})