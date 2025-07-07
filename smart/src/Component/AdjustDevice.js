import React from 'react';
import '../css/adjustdevices.css';
import { FaLightbulb, FaFan, FaTv, FaSnowflake } from 'react-icons/fa';

const AdjustDevices = () => {
  return (
    <div className="adjust-devices-container">
      <div className="breadcrumb">
        <span>Dashboard</span> &gt;
        <span> Device control</span> &gt;
        <span className="font-semibold"> Adjust devices</span>
      </div>

      <h1>Adjust Devices</h1>

      {/* Lighting */}
      <h2>Lighting</h2>
      <div className="device-grid">
        <div className="device-card">
          <FaLightbulb className="device-icon" />
          <div className="device-name">Living Room</div>
          <div className="device-actions">
            <button className="action-button secondary">Dim</button>
            <button className="action-button">Turn off</button>
          </div>
        </div>
        <div className="device-card">
          <FaLightbulb className="device-icon" />
          <div className="device-name">Bed Room</div>
          <div className="device-actions">
            <button className="action-button secondary">Dim</button>
            <button className="action-button">Turn off</button>
          </div>
        </div>
      </div>

      {/* Fans */}
      <h2>Fans</h2>
      <div className="device-grid">
        <div className="device-card">
          <FaFan className="device-icon" />
          <div className="device-name">Living Room Fan</div>
          <div className="device-actions">
            <button className="action-button secondary">Slower</button>
            <button className="action-button">Turn off</button>
          </div>
        </div>
        <div className="device-card">
          <FaFan className="device-icon" />
          <div className="device-name">Bed Room Fan</div>
          <div className="device-actions">
            <button className="action-button secondary">Slower</button>
            <button className="action-button">Turn off</button>
          </div>
        </div>
      </div>

      {/* Other Devices */}
      <h2>Other Devices</h2>
      <div className="device-grid">
        <div className="device-card">
          <FaTv className="device-icon" />
          <div className="device-name">Smart TV</div>
          <div className="device-actions">
            <button className="action-button secondary">Power Save</button>
            <button className="action-button">Turn off</button>
          </div>
        </div>
        <div className="device-card">
          <FaSnowflake className="device-icon" />
          <div className="device-name">AC</div>
          <div className="device-actions">
            <button className="action-button secondary">Eco Boost</button>
            <button className="action-button">Turn off</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustDevices;
