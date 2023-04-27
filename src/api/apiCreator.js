import { AUTH_DEFAULT_LOGIN_PATH, NOTIFICATION_PATH } from './';

function getAuthDefaultLoginQueryCreator(email, password) {
  return `${AUTH_DEFAULT_LOGIN_PATH}?email=${email}&auth_key=${password}`;
}

function notificationWithIdQueryCreator(id) {
  return `${NOTIFICATION_PATH}/${id}`;
}

export {
  getAuthDefaultLoginQueryCreator,
  notificationWithIdQueryCreator,
}