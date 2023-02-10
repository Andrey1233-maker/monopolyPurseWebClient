// общие селекторы
export const userReducerSelector = state => state.userReducer

// селектроря для конкретных полей
export const userFromuserReducerSelector = state => userReducerSelector(state).user

// комбинированные селекторы