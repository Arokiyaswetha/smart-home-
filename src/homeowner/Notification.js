// Alert Data
const activeAlerts = [
  { title: "Device Failure", source: "Sensor A12", level: "Critical", time: "2 min ago" },
  { title: "Security Breach", source: "Camera 3", level: "High", time: "Just now" },
  { title: "Unusual Activity", source: "Door lock", level: "Medium", time: "5min ago" }
];

const upcomingNotifications = [
  { title: "Scheduled Maitenance", source: "HVAC System", level: "Low", time: "Tomorrow" },
  { title: "Software Update", source: "Gateway 2", level: "Info", time: "2 days" }
];

// Render Active Alerts
function renderActiveAlerts(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  activeAlerts.forEach(alert => {
    const row = document.createElement("div");
    row.className = "alert-row";
    row.innerHTML = `
      <div>${alert.title}</div>
      <div>${alert.source}</div>
      <div>${alert.level}</div>
      <div>${alert.time}</div>
      <div>→</div>
    `;
    container.appendChild(row);
  });
}

// Render Upcoming Notifications
function renderUpcomingNotifications(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  upcomingNotifications.forEach(notification => {
    const row = document.createElement("div");
    row.className = "notification-row";
    row.innerHTML = `
      <div>${notification.title}</div>
      <div>${notification.source}</div>
      <div>${notification.level}</div>
      <div>${notification.time}</div>
      <div>→</div>
    `;
    container.appendChild(row);
  });
}

// Alert Preferences Toggle
function setupPreferencesToggles() {
  const toggles = document.querySelectorAll(".toggle-switch");
  toggles.forEach(toggle => {
    toggle.addEventListener("change", (e) => {
      const pref = e.target.dataset.pref;
      const state = e.target.checked;
      console.log(`Preference "${pref}" set to ${state}`);
      // Save preference to localStorage or backend here
    });
  });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  renderActiveAlerts("active-alerts");
  renderUpcomingNotifications("upcoming-notifications");
  setupPreferencesToggles();
});
