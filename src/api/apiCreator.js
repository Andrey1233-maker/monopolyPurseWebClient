import { AUTH_DEFAULT_LOGIN_PATH, NOTIFICATION_PATH, TABLE_PATH } from "./";

function getAuthDefaultLoginQueryCreator(email, password) {
  return `${AUTH_DEFAULT_LOGIN_PATH}?email=${email}&auth_key=${password}`;
}

function notificationWithIdQueryCreator(id) {
  return `${NOTIFICATION_PATH}/${id}`;
}

function tableWithIdQueryCreator(id) {
  return `${TABLE_PATH}/${id}`
}

export { getAuthDefaultLoginQueryCreator, notificationWithIdQueryCreator, tableWithIdQueryCreator };
