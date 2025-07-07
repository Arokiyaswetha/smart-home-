import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Fan, Thermometer, Check, ArrowLeft } from 'lucide-react';
import '../css/addroom.css';

const devicesList = [
  { id: 1, name: 'Smart Light', location: 'Living room', icon: <Lightbulb /> },
  { id: 2, name: 'Ceiling Fan', location: 'Bedroom', icon: <Fan /> },
  { id: 3, name: 'Thermostat', location: 'Hallway', icon: <Thermometer /> }
];

export default function AddRoom() {
  const [roomName, setRoomName] = useState('');
  const [assignedDevices, setAssignedDevices] = useState([]);
  const navigate = useNavigate();

  const toggleDevice = (id) => {
    if (assignedDevices.includes(id)) {
      setAssignedDevices(assignedDevices.filter((deviceId) => deviceId !== id));
    } else {
      setAssignedDevices([...assignedDevices, id]);
    }
  };

  return (
    <div className="add-room-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate('/')}>
          <ArrowLeft size={16} style={{ marginRight: '4px' }} />
          Dashboard
        </span>
        <span> &gt; </span>
        <span className="breadcrumb-link" onClick={() => navigate('/room')}>
          Room Management
        </span>
        <span> &gt; </span>
        <span className="breadcrumb-active">Add Room</span>
      </div>

      {/* Room Details */}
      <h2 className="room-title">Room Details</h2>
      <label className="input-label">Room Name</label>
      <input
        className="room-input"
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />

      {/* Assign Devices */}
      <h3 className="device-section-title">Assign Devices</h3>
      {devicesList.map((device) => (
        <div className="device-card" key={device.id}>
          <div className="device-left">
            <div className="device-icon">{device.icon}</div>
            <div className="device-details">
              <span className="device-name">{device.name}</span>
              <span className="device-location">{device.location}</span>
            </div>
          </div>
          <div className="assign-button" onClick={() => toggleDevice(device.id)}>
            {assignedDevices.includes(device.id) ? <Check size={20} /> : '+'}
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="save-btn">Save Room</button>
        <button className="cancel-btn" onClick={() => navigate('/room')}>Cancel</button>
      </div>
    </div>
  );
}
