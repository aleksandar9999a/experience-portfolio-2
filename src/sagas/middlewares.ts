import { handleGetMainInfo } from './mainInfoSaga';
import { handleGetAbout } from './aboutSaga';
import { handleGetSkills } from './skillsSaga';
import { handleSendEmail } from './emailSaga';

import {
    handleGetProject,
    handleGetProjects,
    handleSubmitProject,
    handleUploadImages
} from './projectsSaga';

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
    handleLogout,
    handleSendEmail,
    handleUploadImages,
    handleSubmitProject
]