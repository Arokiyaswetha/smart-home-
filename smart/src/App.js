import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../src/Component/Dashboard';
import DeviceControl from '../src/Component/DeviceControl';
import Logs from '../src/Component/Logs';
import Layout from './Component/Layout';
import './css/dashboard.css';
import ProfileSettings from './Component/Profile';
import Surveillance from './Component/Surveillance';

// ...add other pages here

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/device-control" element={<DeviceControl />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/settings" element={<ProfileSettings />} />
      <Route path="/surveillance" element={<Surveillance/>} />


    
      
      Add more routes like /automation, /notification etc.
      </Route>
    </Routes>
   
  );
}
