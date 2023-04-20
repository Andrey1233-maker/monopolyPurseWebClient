import { call, put } from "redux-saga/effects"
import { postAuthDefaultRegReuest } from "../../../api/requests/post/postAuthDefaultRegReuest"
import { setToken } from "../../../readToken"
import { setAlertToUserReduxActionCreator } from '../../actions/actionCreators'

export function* workerPostAuthDefaultRegSaga(action) {
    try {
        const token = yield call(postAuthDefaultRegReuest, action)
        yield setToken(token)
    }
    catch(e) {
        yield put(setAlertToUserReduxActionCreator('Ошибка при запросе данных о вас', true))
    }
}