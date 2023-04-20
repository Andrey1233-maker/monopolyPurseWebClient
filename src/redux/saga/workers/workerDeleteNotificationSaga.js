import { call, put } from 'redux-saga/effects'

import { deleteNotificationRequest } from '../../../api/requests/delete/deleteNotificationRequest'
import { requestNotificationsActionCreator, setAlertToUserReduxActionCreator } from '../../actions/actionCreators'

export function* workerDeleteNotificationSaga(action) {
    try {
        yield call(deleteNotificationRequest, action)
        yield put(requestNotificationsActionCreator())
    }
    catch(e) {
        yield put(setAlertToUserReduxActionCreator('Ошибка при удалении уведомления', true))
    }
}