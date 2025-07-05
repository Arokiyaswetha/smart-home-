import React from 'react';
import '../css/deviceControl.css';
import { ChevronLeft, Lightbulb, Thermometer, Lock } from 'lucide-react';

export default function DeviceControl() {
  const devices = [
    {
      icon: <Lightbulb color="#3f0071" size={24} />,
      name: 'Living Room Light',
      status: 'Online',
      room: 'Living Room',
      type: 'Light',
      action: 'Turn off',
    },
    {
      icon: <Thermometer color="#3f0071" size={24} />,
      name: 'Kitchen Thermostat',
      status: 'Idle',
      room: 'Kitchen',
      type: 'Thermostat',
      action: 'Adjust',
    },
    {
      icon: <Lock color="#3f0071" size={24} />,
      name: 'Front Door Lock',
      status: 'Locked',
      room: 'Entrance',
      type: 'Lock',
      action: 'Unlock',
    },
  ];

  return (
    <div className="device-control-container">
      {/* Header */}
      <div className="device-header">
        <div className="breadcrumb">
          <ChevronLeft size={16} />
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span className="active">Device Control</span>
        </div>
        <div className="user-info">
          <span>Alex Morgan</span>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="user-avatar"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">Devices</button>
        <button>Adjust devices</button>
        <button>Energy Saver</button>
      </div>

      <p>Manage and control your connected devices.</p>

      {/* Device Cards */}
      <div className="device-grid">
        {devices.map((device, idx) => (
          <div key={idx} className="device-card">
            <div>{device.icon}</div>
            <h4>{device.name}</h4>
            <p>Status: {device.status}</p>
            <p>Room: {device.room}</p>
            <p>Type: {device.type}</p>
            <div className="buttons">
              <button className="action-btn">{device.action}</button>
              <button className="settings-btn">Settings</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Device */}
      <div className="add-section">
        <h3>Add New Device</h3>
        <button>Add device</button>
      </div>
    </div>
  );
}
