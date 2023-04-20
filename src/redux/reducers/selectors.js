// общие селекторы
export const userReducerSelector = state => state.userReducer

// селектроря для конкретных полей
export const userFromuserReducerSelector = state => userReducerSelector(state).user

//
export const notificationsFromUserReducerSelector = state => userReducerSelector(state).notifications

export const alertFromUserReducerSelector = state => userReducerSelector(state).alert

export const alertErrorFromUserReducerSelector = state => userReducerSelector(state).alertError
// комбинированные селекторы

export const alertFullFromUserSelector = state => ({
    alert: alertFromUserReducerSelector(state),
    error: alertErrorFromUserReducerSelector(state),
})