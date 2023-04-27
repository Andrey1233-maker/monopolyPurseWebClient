import { AUTH_DEFAULT_LOGIN_PATH, NOTIFICATION_PATH } from "./apiPath";

export function getAuthDefaultLoginQueryCreator(email, password) {
  return `${AUTH_DEFAULT_LOGIN_PATH}?email=${email}&auth_key=${password}`;
}

export function notificationWithIdQueryCreator(id) {
  return `${NOTIFICATION_PATH}/${id}`;
}
