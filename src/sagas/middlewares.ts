import { handleGetMainInfo } from './mainInfoSaga';
import { handleGetProjects } from './projectsSaga';
import { handleGetAbout } from './aboutSaga';
import { handleGetSkills } from './skillsSaga';

export default [
    handleGetMainInfo,
    handleGetProjects,
    handleGetAbout,
    handleGetSkills
]