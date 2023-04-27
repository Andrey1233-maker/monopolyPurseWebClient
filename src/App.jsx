
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainRouting } from './MainRouting'
import { requestGetUserWhoAmIActionCreator } from './redux/actions/actionCreators';
import { userAndUserSelector } from './redux/reducers/selectors'

import './App.css';
import { NotificationModal } from './components/NotificationModal/NotificationModal';

function App() {

  const dispatch = useDispatch()
  const { user, alert } = useSelector(userAndUserSelector)

  useEffect(() => {
    dispatch(requestGetUserWhoAmIActionCreator())
  }, [dispatch])

  return (
    <div className="App">
      <MainRouting/>
      {alert && <NotificationModal />}
    </div>
  );
}

export default App;
