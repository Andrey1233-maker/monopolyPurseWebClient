
import './App.css';
import { NotificationModal } from './components/NotificationModal/NotificationModal';
import { MainRouting } from './MainRouting'

function App() {

  const n = null

  return (
    <div className="App">
      <MainRouting />
      {n && <NotificationModal message={n}/>}
    </div>
  );
}

export default App;
