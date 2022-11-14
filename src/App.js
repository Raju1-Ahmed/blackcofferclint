import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BarChart from './Component/BarChart';
import Dashboard from './Component/Dashboard';
import Histogram from './Component/Histogram';
import LineChart from './Component/LineChart';
import Menu from './Component/Menu';
import PaieChart from './Component/PaieChart';
// import PaieChart from './Component/PaieChart';
import TimeSeries from './Component/TimeSeries';
function App() {
  return (
    <div>
      <Menu></Menu>
      {/* <Dashboard></Dashboard> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/linechart" element={<LineChart />} />
          <Route path="/dashboard/barchart" element={<BarChart width={200} height={200} />} />
          <Route path="/dashboard/paichart" element={<PaieChart />} />
          <Route path="/dashboard/histogram" element={<Histogram width={700} height={400} />} />
          <Route path="/dashboard/timeseries" element={<TimeSeries width={700} height={400} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
