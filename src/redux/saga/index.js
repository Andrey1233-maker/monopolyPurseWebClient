import { all, takeEvery } from "redux-saga/effects";
import {
  REQUEST_POST_TABLE_ACTION,
  REQUEST_GET_NOTIFICATIONS_ACTION,
  REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION,
  REQUEST_GET_USER_WHO_AM_I_ACTION,
  REQUEST_POST_AUTH_DEFAULT_REG_ACTION,
  REQUEST_DELETE_NOTIFICATION_ACTION,
  REQUEST_GET_TABLES_ACTION,
} from "../actions/actionTypes";
import { workerGetAuthDefaultLoginSaga } from "./workers/workerGetAuthDefaultLoginSaga";
import { workerGetUserWhoAmISaga } from "./workers/workerGetUserWhoAmISaga";
import { workerPostAuthDefaultRegSaga } from "./workers/workerPostAuthDefaultRegSaga";
import { workerGetNotificationsSaga } from "./workers/workerGetNotificationsSaga";
import { workerDeleteNotificationSaga } from "./workers/workerDeleteNotificationSaga";
import { workerGetTablesSaga } from "./workers/workerGetTablesSaga";
import { workerPostTableSaga } from "./workers/workerPostTableSaga";

export function* saga() {
  yield all([
    takeEvery(
      REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION,
      workerGetAuthDefaultLoginSaga
    ),
    takeEvery(
      REQUEST_POST_AUTH_DEFAULT_REG_ACTION,
      workerPostAuthDefaultRegSaga
    ),
    takeEvery(REQUEST_GET_USER_WHO_AM_I_ACTION, workerGetUserWhoAmISaga),
    takeEvery(REQUEST_GET_NOTIFICATIONS_ACTION, workerGetNotificationsSaga),
    takeEvery(REQUEST_DELETE_NOTIFICATION_ACTION, workerDeleteNotificationSaga),
    takeEvery(REQUEST_GET_TABLES_ACTION, workerGetTablesSaga),
    takeEvery(REQUEST_POST_TABLE_ACTION, workerPostTableSaga),
  ]);
}
