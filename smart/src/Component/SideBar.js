// src/components/Sidebar.jsx
import React from 'react';
import {
  Home, Settings, LogOut, Bell, Zap, Shield, Lightbulb, Gauge, Camera, Grid2X2, Layers, DoorOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

function SidebarItem({ icon, label, to }) {
  return (
    <li>
      <Link to={to} style={{ display: 'flex', alignItems: 'center', padding: '10px', color: 'inherit', textDecoration: 'none' }}>
        <span style={{ marginRight: '10px' }}>{icon}</span>
        {label}
      </Link>
    </li>
  );
}

export default function SideBar() {
  return (

    <aside className="sidebar dashboardSidebar" >
       <h1><Lightbulb size={20} style={{ marginRight: '8px' }} /> SMART AURA</h1>
      
      <ul >
        <SidebarItem icon={<Home />} label="Dashboard" to="/" />
        <SidebarItem icon={<Settings />} label="Device Control" to="/device-control" />
        <SidebarItem icon={<Gauge />} label="Settings" to="/settings" />
        <SidebarItem icon={<Layers />} label="Logs" to="/logs" />
        <SidebarItem icon={<Camera />} label="Surveillance" to="/surveillance" />
        <SidebarItem icon={<Zap />} label="Energy Overview" to="/energy" />
        <SidebarItem icon={<Grid2X2 />} label="Automation" to="/automation" />
        <SidebarItem icon={<Bell />} label="Notification" to="/notification" />
        <SidebarItem icon={<Shield />} label="Summary" to="/summary" />
        <SidebarItem icon={<DoorOpen />} label="Room Management" to="/rooms" />
        <SidebarItem icon={<LogOut />} label="Sign Out" to="/logout" />
      </ul>
    </aside>
  );
}
