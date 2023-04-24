
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainRouting } from './MainRouting'
import { requestGetUserWhoAmIActionCreator } from './redux/actions/actionCreators';
import { alertFromUserReducerSelector, userFromuserReducerSelector } from './redux/reducers/selectors'

import './App.css';
import { NotificationModal } from './components/NotificationModal/NotificationModal';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(userFromuserReducerSelector)
  const alert = useSelector(alertFromUserReducerSelector)

  useEffect(() => {
    dispatch(requestGetUserWhoAmIActionCreator())
  }, [dispatch])

  return (
    <div className="App">
      <MainRouting user={user}/>
      {alert && <NotificationModal />}
    </div>
  );
}

export default App;
