// Sample automation rules
const automations = [
  {
    title: "Hallway Motion After 11Pm",
    description: "If motion in hall after 11PM, turn on hallway lights",
    icon: "💡"
  },
  {
    title: "High Temp Alert",
    description: "If temperature > 30°C, send notification",
    icon: "🌡️"
  },
  {
    title: "Front Door Open",
    description: "If door opens, lock after 1min",
    icon: "🚪"
  },
  {
    title: "No Motion Lights Off",
    description: "If no motion 10 min, turn off lights",
    icon: "💤"
  }
];

// Load automations into the UI
function loadAutomations() {
  const container = document.getElementById("automationList");

  automations.forEach((auto) => {
    const item = document.createElement("div");
    item.className = "automation-item";
    item.innerHTML = `
      <div class="icon">${auto.icon}</div>
      <div class="text">
        <strong>${auto.title}</strong><br />
        <small>${auto.description}</small>
      </div>
    `;
    container.appendChild(item);
  });
}

// Run when the page loads
window.onload = loadAutomations;
