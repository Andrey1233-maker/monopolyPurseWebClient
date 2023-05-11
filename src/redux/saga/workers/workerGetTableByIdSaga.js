import { call, put } from 'redux-saga/effects';
import { setAlertToUserReduxActionCreator, setTableToTableReducerActionCreator } from './../../actions/actionCreators'
import { getTableByIdRequest } from '../../../api/requests/get';

export function* workerGetTableByIdSaga(action) {
    try {
        const table = yield call(getTableByIdRequest, action);
        yield put(setTableToTableReducerActionCreator(table))
    }
    catch(e) {
        yield put(
            setAlertToUserReduxActionCreator("Комната не найдена", true)
          );
    }
}