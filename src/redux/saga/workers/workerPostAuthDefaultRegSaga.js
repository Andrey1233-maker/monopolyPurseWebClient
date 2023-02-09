import { call } from "redux-saga/effects"
import { postAuthDefaultRegReuest } from "../../../api/requests/post/postAuthDefaultRegReuest"
import { setToken } from "../../../readToken"

export function* workerPostAuthDefaultRegSaga(action) {
    try {
        const token = yield call(postAuthDefaultRegReuest, action)
        yield setToken(token)
    }
    catch(e) {
        console.log(e)
    }
}