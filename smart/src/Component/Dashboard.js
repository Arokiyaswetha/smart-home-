// Dashboard.jsx
import React from 'react';
import '../css/dashboard.css';
import {
  Home, Settings, LogOut, Bell, Zap, Shield, Lightbulb, Gauge, Camera, Grid2X2, Layers, DoorOpen
} from 'lucide-react';
import SideBar from './SideBar';

export default function Dashboard() {
  return (
   <>
      {/* Sidebar */}
      {/* <SideBar/> */}
      {/* <aside className="sidebar dashboardSidebar" >
        <h1><Lightbulb size={20} style={{ marginRight: '8px' }} /> SMART AURA</h1>
        <ul>
          <SidebarItem icon={<Home size={16} />} label="Dashboard" />
          <SidebarItem icon={<Settings size={16} />} label="Device Control" />
          <SidebarItem icon={<Gauge size={16} />} label="Settings" />
          <SidebarItem icon={<Layers size={16} />} label="Logs" />
          <SidebarItem icon={<Camera size={16} />} label="Surveillance" />
          <SidebarItem icon={<Zap size={16} />} label="Energy Overview" />
          <SidebarItem icon={<Grid2X2 size={16} />} label="Automation" />
          <SidebarItem icon={<Bell size={16} />} label="Notification" />
          <SidebarItem icon={<Shield size={16} />} label="Summary" />
          <SidebarItem icon={<DoorOpen size={16} />} label="Room Management" />
          <SidebarItem icon={<LogOut size={16} />} label="Sign Out" />
        </ul>
      </aside> */}

      {/* Main content */}
    <div className="dashboard-body">
          <h2>Dashboard</h2>
          <h3 className="welcome italic">Welcome back</h3>
          <p className="subtitle">Your smart home overview</p>
       
        {/* Overview Cards */}
        <div className="overview">
          <DashboardCard title="Devices" value="12 Connected" description="All devices are online" />
          <DashboardCard title="Security" value="No Alerts" description="Your home is secure" />
          <DashboardCard title="Energy" value="Low Usage" description="Energy consumption" />
        </div>

        {/* Activity */}
        <div className="activity">
          <h3>Recent Activity</h3>
          <table>
            <tbody>
              <ActivityRow device="Front Door" status="Unlocked" time="2 min ago" />
              <ActivityRow device="Thermostat" status="Set to 72 °F" time="5 min ago" />
              <ActivityRow device="Living Room Lights" status="Turned off" time="10 min ago" />
            </tbody>
          </table>
        </div>
        </div>
   </>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <li>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>{icon}</span>
        {label}
      </span>
    </li>
  );
}

function DashboardCard({ title, value, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <strong>{value}</strong>
      <p>{description}</p>
    </div>
  );
}

function ActivityRow({ device, status, time }) {
  return (
    <tr>
      <td>{device}</td>
      <td>{status}</td>
      <td>{time}</td>
    </tr>
  );
}
