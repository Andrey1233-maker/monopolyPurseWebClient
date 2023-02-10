import { call, put } from 'redux-saga/effects'

import { getUserWhoAmIRequest } from '../../../api/requests/get/getUserWhoAmIRequest'
import { setUserToUserReduceActionCreator } from '../../actions/actionCreators'

export function* workerGetUserWhoAmISaga() {
    try {
        const user = yield call(getUserWhoAmIRequest)
        yield put(setUserToUserReduceActionCreator(user))
    }
    catch(e) {
        console.log(e)
    }
}