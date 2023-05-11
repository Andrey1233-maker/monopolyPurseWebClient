import {
  SET_ALERT_TO_USER_REDUCE_ACTION,
  REQUEST_DELETE_NOTIFICATION_ACTION,
  REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION,
  REQUEST_GET_NOTIFICATIONS_ACTION,
  REQUEST_GET_USER_WHO_AM_I_ACTION,
  REQUEST_POST_AUTH_DEFAULT_REG_ACTION,
  SET_NOTIFICATIONS_TO_USER_REDUCE_ACTION,
  SET_USER_TO_USER_REDUCE_ACTION,
  SET_TABLES_TO_TABLES_REDUCER_ACTION,
  REQUEST_POST_TABLE_ACTION,
  REQUEST_GET_TABLES_ACTION,
  SET_SELECTED_TABLE_TO_TABLE_REDUCER_ACTION,
  REQUEST_TABLE_BY_ID_ACTION,
} from "./actionTypes";

export function requestGetAuthDefaultLoginActionCreator(email, auth_key) {
  return {
    type: REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION,
    email,
    auth_key,
  };
}

export function requestPostAuthDefaultRegActionCreator(email, auth_key, name) {
  return {
    type: REQUEST_POST_AUTH_DEFAULT_REG_ACTION,
    email,
    auth_key,
    name,
  };
}

export function setUserToUserReduceActionCreator(user) {
  return {
    type: SET_USER_TO_USER_REDUCE_ACTION,
    user,
  };
}

export function requestGetUserWhoAmIActionCreator() {
  return {
    type: REQUEST_GET_USER_WHO_AM_I_ACTION,
  };
}

export function setNotificationsActionCreator(notifications) {
  return {
    type: SET_NOTIFICATIONS_TO_USER_REDUCE_ACTION,
    notifications,
  };
}

export function requestNotificationsActionCreator() {
  return {
    type: REQUEST_GET_NOTIFICATIONS_ACTION,
  };
}

export function requestDeleteNotificationActionCreator(id) {
  return {
    type: REQUEST_DELETE_NOTIFICATION_ACTION,
    id,
  };
}

export function setAlertToUserReduxActionCreator(content, error) {
  return {
    type: SET_ALERT_TO_USER_REDUCE_ACTION,
    content,
    error,
  };
}

export function setTablesToTableReducerActionCreator(tables) {
  return {
    type: SET_TABLES_TO_TABLES_REDUCER_ACTION,
    tables,
  };
}

export function requestPostTableActionCreator(title, description, style) {
  return {
    type: REQUEST_POST_TABLE_ACTION,
    title,
    description,
    style,
  };
}

export function requestGetTablesActionCreator() {
  return {
    type: REQUEST_GET_TABLES_ACTION,
  };
}

export function setTableToTableReducerActionCreator(table) {
  return {
    type: SET_SELECTED_TABLE_TO_TABLE_REDUCER_ACTION,
    table,
  }
}

export function requestTableByIdActionCreator(id) {
  return {
    type: REQUEST_TABLE_BY_ID_ACTION,
    id,
  }
}