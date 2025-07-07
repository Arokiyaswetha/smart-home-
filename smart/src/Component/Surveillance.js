import React from "react";
import '../css/surveillance.css';



const Surveillance = () => {
  const motionLogs = [
    { time: "2024-06-12 21:14", zone: "Front Door" },
    { time: "2024-06-12 20:45", zone: "Garage" },
  ];

  const accessLogs = [
    { time: "2024-06-12 21:10", action: "Door Unlocked", user: "Homeowner" },
    { time: "2024-06-12 19:00", action: "Door Unlocked", user: "Homeowner" },
  ];

  return (
    <div className="surveillance-wrapper">
      <h2 className="surveillance-title">Live Camera Feed</h2>

      <img
        src="https://images.unsplash.com/photo-1581091012184-de98f0388944?auto=format&fit=crop&w=600&q=80"
        alt="Camera Feed"
        className="camera-image"
      />

      <section className="section">
        <h3 className="section-title">Motion Detection</h3>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Enable Alerts</span>
        </label>

        <h4 className="subheading">Recent Activity</h4>
        <ul className="log-list">
          {motionLogs.map((log, index) => (
            <li key={index} className="log-item">
              <span>{log.time}</span>
              <span>Motion detected</span>
              <span>Zone: {log.zone}</span>
              <span className="alert-icon">⚠️</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3 className="section-title">Remote Door Control</h3>
        <div className="button-group">
          <button className="button lock-btn">Lock door</button>
          <button className="button unlock-btn">Unlock</button>
        </div>

        <h4 className="subheading">Access Logs</h4>
        <ul className="log-list">
          {accessLogs.map((log, index) => (
            <li key={index} className="log-item">
              <span>{log.time}</span>
              <span>{log.action}</span>
              <span>User: {log.user}</span>
              <span className="alert-icon">⚠️</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Surveillance;
