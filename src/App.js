
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MainRouting } from './MainRouting'
import { requestGetUserWhoAmIActionCreator } from './redux/actions/actionCreators';

import './App.css';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGetUserWhoAmIActionCreator())
  }, [dispatch])

  return (
    <div className="App">
      <MainRouting />
    </div>
  );
}

export default App;
