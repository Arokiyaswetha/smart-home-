// Dummy energy usage data
const energyData = {
  "Living Room Lamp": { usage: 12.5, status: "Active", cost: 1.5 },
  "AC Unit": { usage: 34.2, status: "Idle", cost: 4.1 },
  "Kitchen Fridge": { usage: 22.8, status: "Active", cost: 2.8 }
};

// Display device usage summary in console
function showDeviceUsage() {
  console.log("Device Energy Usage Summary:");
  Object.entries(energyData).forEach(([device, { usage, status, cost }]) => {
    console.log(`${device} | ${usage} kWh | ${status} | $${cost.toFixed(2)}`);
  });
}

// Energy Tips Section
function viewReport() {
  alert("Opening peak usage report...");
  // window.open('https://example.com/peak-usage-report', '_blank');
}

function applyACSetting() {
  alert("AC temperature set to 24°C for optimal efficiency.");
  console.log("AC setting optimized.");
}

function upgradeLighting() {
  alert("Lighting upgrade recommendation applied. Switched to LED.");
  console.log("Lighting upgraded to LED.");
}
