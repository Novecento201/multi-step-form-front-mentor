import Sidebar from './components/Sidebar/Sidebar';
import FormPage from './components/FormPage/FormPage';
import './App.css';

function App() {
  return (
    <div className="background">
      <div className="container__app">
        <Sidebar />
        <FormPage />
      </div>
    </div>
  );
}

export default App;
