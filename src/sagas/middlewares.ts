import { handleGetMainInfo } from './mainInfoSaga';
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