import { call } from "redux-saga/effects"
import { getAuthDefaultLoginRequest } from "../../../api/requests/get/getAuthDefaltLoginRequest"
import { setToken } from '../../../readToken'

export function* workerGetAuthDefaultLoginSaga(action) {
    try {
        const token = yield call(getAuthDefaultLoginRequest, action)
        yield setToken(token)
    }
    catch(e) {
        console.log(e)
    }
}