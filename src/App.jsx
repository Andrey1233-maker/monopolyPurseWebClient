import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotificationModal } from "./components";
import { MainRouting } from "./MainRouting";
import { requestGetUserWhoAmIActionCreator } from "./redux/actions/actionCreators";
import { userAndUserSelector } from "./redux/reducers/selectors";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { user, alert } = useSelector(userAndUserSelector);

  useEffect(() => {
    dispatch(requestGetUserWhoAmIActionCreator());
  }, [dispatch]);

  return (
    <div className="App">
      <MainRouting />
      {alert && <NotificationModal />}
    </div>
  );
}

export default App;
