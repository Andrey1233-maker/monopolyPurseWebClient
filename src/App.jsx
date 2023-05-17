import { Suspense, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotificationModal } from "./components";
import { MainRouting } from "./MainRouting";
import { requestGetUserWhoAmIActionCreator } from "./redux/actions/actionCreators";
import { userAndUserSelector } from "./redux/reducers/selectors";

import "./App.css";
import { readToken } from "./readToken";

function App() {
  const dispatch = useDispatch();
  const { user, alert } = useSelector(userAndUserSelector);
  const token = useMemo(() => {
    return readToken()
  }, [user])

  useEffect(() => {
    dispatch(requestGetUserWhoAmIActionCreator());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <MainRouting token={token} />
        {alert && <NotificationModal />}
      </Suspense>
    </div>
  );
}

export default App;
