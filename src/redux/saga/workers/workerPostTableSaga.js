import { call, put } from 'redux-saga/effects'
import { setAlertToUserReduxActionCreator, requestGetTablesActionCreator } from '../../actions/actionCreators'
import { postTableRequest } from '../../../api/requests/post/postTableRequest'


export function* workerPostTableSaga(action) {
    try {
        const tables = yield call(postTableRequest, action)
        yield put(requestGetTablesActionCreator())
        yield put(setAlertToUserReduxActionCreator('Комната создана', false))

    }
    catch(e) {
        yield put(setAlertToUserReduxActionCreator('Не удалось создать комнату', true))
    }
}