import { handleGetMainInfo } from './mainInfoSaga';
import { handleGetProjects } from './projectsSaga';
import { handleGetAbout } from './aboutSaga';
import { handleGetSkills } from './skillsSaga';
import { handleUserLogin } from './userSaga';
import { handleLoad } from './loadSaga';

export default [
    handleGetMainInfo,
    handleGetProjects,
    handleGetAbout,
    handleGetSkills,
    handleUserLogin,
    handleLoad
]