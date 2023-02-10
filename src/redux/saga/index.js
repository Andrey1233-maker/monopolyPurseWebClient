import {all, takeEvery } from 'redux-saga/effects'
import { REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION, REQUEST_GET_USER_WHO_AM_I_ACTION, REQUEST_POST_AUTH_DEFAULT_REG_ACTION } from '../actions/actionTypes'
import { workerGetAuthDefaultLoginSaga } from './workers/workerGetAuthDefaultLoginSaga'
import { workerGetUserWhoAmISaga } from './workers/workerGetUserWhoAmISaga'
import { workerPostAuthDefaultRegSaga } from './workers/workerPostAuthDefaultRegSaga'

export function* saga() {
    yield all([
        takeEvery(REQUEST_GET_AUTH_DAFAULT_LOGIN_ACTION, workerGetAuthDefaultLoginSaga),
        takeEvery(REQUEST_POST_AUTH_DEFAULT_REG_ACTION, workerPostAuthDefaultRegSaga),
        takeEvery(REQUEST_GET_USER_WHO_AM_I_ACTION, workerGetUserWhoAmISaga),
    ])
}