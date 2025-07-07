import { Routes, Route } from 'react-router-dom';
import Dashboard from '../src/Component/Dashboard';
import DeviceControl from '../src/Component/DeviceControl';
import Logs from '../src/Component/Logs';
import Layout from './Component/Layout';
import './css/dashboard.css';
import ProfileSettings from './Component/Profile';
import Surveillance from './Component/Surveillance';
import EnergyOverview from './Component/EnergyOverview';
import Automation from './Component/Automation';
import Notifications from './Component/Notification';
import Summary from './Component/Summary';
import RoomManagement from './Component/Room management';
import AdjustDevices from './Component/AdjustDevice';
import Scenerio from './Component/Scenerio';
import AddRoom from './Component/AddRoom';
// ...add other pages here

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/device-control" element={<DeviceControl />} />
        <Route path="/device-control/adjust" element={<AdjustDevices />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/settings" element={<ProfileSettings />} />
      <Route path="/surveillance" element={<Surveillance/>} />
      <Route path="/energy" element={<EnergyOverview />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/notification" element={<Notifications />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/room" element={<RoomManagement />} />
      <Route path="/scenerio" element={<Scenerio />} />
      <Route path="/room-management/add" element={<AddRoom />} />

      Add more routes like /automation, /notification etc.
      </Route>
    </Routes>
   
  );
}
