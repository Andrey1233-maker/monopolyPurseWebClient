import { call, put } from "redux-saga/effects"
import { getAuthDefaultLoginRequest } from "../../../api/requests/get/getAuthDefaltLoginRequest"
import { setToken } from '../../../readToken'
import { setAlertToUserReduxActionCreator } from '../../actions/actionCreators'

export function* workerGetAuthDefaultLoginSaga(action) {
    try {
        const token = yield call(getAuthDefaultLoginRequest, action)
        yield console.log(token)
        yield setToken(token.token)
    }
    catch(e) {
        yield put(setAlertToUserReduxActionCreator('Нужно авторизоваться', true))
        
    }
}