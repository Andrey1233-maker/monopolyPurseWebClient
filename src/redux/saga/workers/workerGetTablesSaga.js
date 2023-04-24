import { call, put } from 'redux-saga/effects'
import { setTablesToTableReducerActionCreator, setAlertToUserReduxActionCreator } from '../../actions/actionCreators'
import { getTablesRequest } from '../../../api/requests/get/getTablesRequest'


export function* workerGetTablesSaga() {
    try {
        const tables = yield call(getTablesRequest)
        yield put(setTablesToTableReducerActionCreator(tables))
    }
    catch(e) {
        yield put(setAlertToUserReduxActionCreator('Не удалось получить комнаты', true))
    }
}