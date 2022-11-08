import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import Menu from './Component/Menu';
import Profile from './Component/Profile';

function App() {
  return (
    <div>
     <Menu></Menu>
     <Routes>
     <Route path="dashboard" element={<Dashboard />} >
          <Route path="/dashboard/myprofile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
