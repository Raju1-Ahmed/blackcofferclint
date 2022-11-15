import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import Histogram from './Component/Histogram';
import LineChart from './Component/LineChart';
import Menu from './Component/Menu';
import PaieChart from './Component/PaieChart';
function App() {
  return (
    <div>
      <Menu></Menu>
      {/* <Dashboard></Dashboard> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/linechart" element={<LineChart />} />
          <Route path="/dashboard/paichart" element={<PaieChart />} />
          <Route path="/dashboard/histogram" element={<Histogram width={700} height={400} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
