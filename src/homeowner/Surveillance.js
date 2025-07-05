// Toggle Motion Alerts
function toggleMotionAlerts(checkbox) {
  if (checkbox.checked) {
    console.log("Motion alerts enabled.");
    alert("Motion alerts have been enabled.");
  } else {
    console.log("Motion alerts disabled.");
    alert("Motion alerts have been disabled.");
  }
}

// Remote Door Lock
function lockDoor() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Door locked by user.`);
  alert("Door has been locked remotely.");
  // Optionally update UI or send to server here
}

// Remote Door Unlock
function unlockDoor() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Door unlocked by user.`);
  alert("Door has been unlocked remotely.");
  // Optionally update UI or send to server here
}
