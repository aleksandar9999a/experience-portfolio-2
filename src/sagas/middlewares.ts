import { handleGetMainInfo } from './mainInfoSaga';
import { handleGetProjects } from './projectsSaga';
import { handleGetAbout } from './aboutSaga';
import { handleGetSkills } from './skillsSaga';
import { handleUserLogin } from './userSaga';

export default [
    handleGetMainInfo,
    handleGetProjects,
    handleGetAbout,
    handleGetSkills,
    handleUserLogin
]