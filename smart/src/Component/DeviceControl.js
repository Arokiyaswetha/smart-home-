import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/deviceControl.css';
import { ChevronLeft, Lightbulb, Thermometer, SlidersHorizontal, Zap } from 'lucide-react';
import AdjustDevices from './AdjustDevice';
import EnergySaver from './EnergySaver';

export default function DeviceControl() {
  const [activeTab, setActiveTab] = useState('devices');
  const navigate = useNavigate();

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
  ];

  return (
    <div className="device-control-container">
      {/* Header */}
      <div className="device-header">
        <div className="breadcrumb">
          <ChevronLeft size={16} />
          <span className="dashboard-link" onClick={() => navigate('/')}>Dashboard</span>
          <span>{'>'}</span>
          <span className="active">Device Control</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === 'devices' ? 'active' : ''} onClick={() => setActiveTab('devices')}>Devices</button>
        <button className={activeTab === 'adjust' ? 'active' : ''} onClick={() => setActiveTab('adjust')}>Adjust Device</button>
        <button className={activeTab === 'energy' ? 'active' : ''} onClick={() => setActiveTab('energy')}>Energy Saver</button>
      </div>

      {/* Devices */}
      {activeTab === 'devices' && (
        <>
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

          <div className="add-section">
            <h3>Add New Device</h3>
            <button>Add device</button>
          </div>
        </>
      )}

      {activeTab === 'adjust' && <AdjustDevices />}
      {activeTab === 'energy' && <EnergySaver />}
    </div>
  );
} 