import { SET_ALERT_TO_USER_REDUCE_ACTION, REQUEST_DELETE_NOTIFICATION_ACTION, REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION, REQUEST_GET_NOTIFICATIONS_ACTION, REQUEST_GET_USER_WHO_AM_I_ACTION, REQUEST_POST_AUTH_DEFAULT_REG_ACTION, SET_NOTIFICATIONS_TO_USER_REDUCE_ACTION, SET_USER_TO_USER_REDUCE_ACTION } from "./actionTypes";

export function requestGetAuthDefaultLoginActionCreator(email, auth_key) {
    return {
        type: REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION,
        email,
        auth_key,
    }
}

export function requestPostAuthDefaultRegActionCreator(email, auth_key, name) {
    return {
        type: REQUEST_POST_AUTH_DEFAULT_REG_ACTION, 
        email,
        auth_key,
        name,
    }
}

export function setUserToUserReduceActionCreator(user) {
    return {
        type: SET_USER_TO_USER_REDUCE_ACTION, 
        user,
    }
}

export function requestGetUserWhoAmIActionCreator() {
    return {
        type: REQUEST_GET_USER_WHO_AM_I_ACTION,
    }
}

export function setNotificationsActionCreator(notifications) {
    return {
        type: SET_NOTIFICATIONS_TO_USER_REDUCE_ACTION,
        notifications,
    }
}

export function requestNotificationsActionCreator() {
    return {
        type: REQUEST_GET_NOTIFICATIONS_ACTION,
    }
}

export function requestDeleteNotificationActionCreator(id) {
    return {
        type: REQUEST_DELETE_NOTIFICATION_ACTION,
        id,
    }
}

export function setAlertToUserReduxActionCreator(content, error) {
    return {
        type: SET_ALERT_TO_USER_REDUCE_ACTION,
        content,
        error,
    }
}