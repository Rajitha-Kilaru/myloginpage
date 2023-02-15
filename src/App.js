import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom'
import DashBoard from './Components/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
