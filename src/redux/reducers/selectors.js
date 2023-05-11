// общие селекторы
export const userReducerSelector = (state) => state.userReducer;

export const tableReducerSelector = (state) => state.tableReducer;

export const  tableInfoReducerSelector = (state) => state.tableInfoReducer;

// селектроря для конкретных полей
export const userFromuserReducerSelector = (state) =>
  userReducerSelector(state).user;
//
export const notificationsFromUserReducerSelector = (state) =>
  userReducerSelector(state).notifications;

export const alertFromUserReducerSelector = (state) =>
  userReducerSelector(state).alert;

export const alertErrorFromUserReducerSelector = (state) =>
  userReducerSelector(state).alertError;

export const tablesFromTableReducerSelector = (state) =>
  tableReducerSelector(state).tables;

export const tableFromTableInfoReducerSelector = (state) =>
  tableInfoReducerSelector(state).table

// комбинированные селекторы

export const alertFullFromUserSelector = (state) => ({
  alert: alertFromUserReducerSelector(state),
  error: alertErrorFromUserReducerSelector(state),
});

export const userAndUserSelector = (state) => ({
  alert: alertFromUserReducerSelector(state),
  user: userReducerSelector(state),
});
