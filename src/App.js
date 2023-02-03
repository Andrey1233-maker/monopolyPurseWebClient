
import './App.css';
import { NotificationModal } from './components/NotificationModal/NotificationModal';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';

function App() {

  const n = 'Нет роутингов  '

  return (
    <div className="App">
      <RegistrationPage/>
      {n && <NotificationModal message={n}/>}
    </div>
  );
}

export default App;
