import { handleGetMainInfo } from './mainInfoSaga';
import { handleSendEmail } from './emailSaga';

import {
    handleDeleteProject,
    handleGetProject,
    handleLoadCreateProject,
    handleSubmitProject
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

import {
    handleGetMyData,
    handleRemoveContact,
    handleSubmitAboutTimeline,
    handleSubmitSkillsTimeline,
    handleSubmitUserdata,
    handleUpdateContact
} from './myDataSaga';

export default [
    handleGetMainInfo,
    handleGetProject,
    handleUserLogin,
    handleAddWarningNotification,
    handleAddErrorNotification,
    handleAddSuccessNotification,
    handleAuthChange,
    handleLogout,
    handleSendEmail,
    handleSubmitProject,
    handleGetMyData,
    handleSubmitUserdata,
    handleSubmitSkillsTimeline,
    handleSubmitAboutTimeline,
    handleUpdateContact,
    handleRemoveContact,
    handleLoadCreateProject,
    handleDeleteProject
]