import { call, put } from 'redux-saga/effects'

import { getNotificationsRequest } from '../../../api/requests/get/getNotificationsRequest'
import { setNotificationsActionCreator, setAlertToUserReduxActionCreator } from '../../actions/actionCreators'

export function* workerGetNotificationsSaga() {
    try {
        const notifications = yield call(getNotificationsRequest)
        yield put(setNotificationsActionCreator(notifications))
        yield put(setAlertToUserReduxActionCreator('Не удалось получить уведомления', true))

    }
    catch(e) {
        yield put(setAlertToUserReduxActionCreator('Не удалось получить уведомления', true))

    }
}