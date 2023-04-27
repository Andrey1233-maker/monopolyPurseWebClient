import { call, put } from "redux-saga/effects";

import { getUserWhoAmIRequest } from "../../../api/requests/get/getUserWhoAmIRequest";
import {
  setUserToUserReduceActionCreator,
  setAlertToUserReduxActionCreator,
} from "../../actions/actionCreators";

export function* workerGetUserWhoAmISaga() {
  try {
    const user = yield call(getUserWhoAmIRequest);
    yield put(setUserToUserReduceActionCreator(user));
  } catch (e) {
    // yield put(setAlertToUserReduxActionCreator('Ошибка при запросе данных о вас', true))
    console.log("Токен умер)))");
  }
}
