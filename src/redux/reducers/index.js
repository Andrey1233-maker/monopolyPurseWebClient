import { combineReducers } from "redux";

import { userReducer } from "./reducers/user";
import { tableReducer } from "./reducers/tables";

export default combineReducers({
  userReducer,
  tableReducer,
});
