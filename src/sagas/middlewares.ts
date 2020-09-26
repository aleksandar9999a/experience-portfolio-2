import { handleGetMainInfo } from './mainInfoSaga';
import { handleGetProject, handleGetProjects } from './projectsSaga';
import { handleGetAbout } from './aboutSaga';
import { handleGetSkills } from './skillsSaga';

import {
    handleAuthChange,
    handleLogout,
    handleUserLogin
} from './userSaga';

import {
    handleAddErrorNotification,
    handleAddSuccessNotification,
    handleAddWarningNotification
} from './notificationsSaga';

export default [
    handleGetMainInfo,
    handleGetProjects,
    handleGetProject,
    handleGetAbout,
    handleGetSkills,
    handleUserLogin,
    handleAddWarningNotification,
    handleAddErrorNotification,
    handleAddSuccessNotification,
    handleAuthChange,
    handleLogout
]