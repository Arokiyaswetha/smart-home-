let automationRules = [
  {
    type: "Rule",
    title: "Turn off Lights",
    description: "When no motion is detected for 10 min in Living Room, turn off all lights."
  },
  {
    type: "Schedule",
    title: "AC On at 7PM",
    description: "Turn on AC in Bedroom every day at 7.00 PM."
  },
  {
    type: "Voice Command",
    title: "Good Night Routine",
    description: "When ‘Good night’ is said, turn off all lights and lock doors."
  }
];

function renderAutomationList() {
  const container = document.getElementById("automationContainer");
  container.innerHTML = ""; // Clear existing content

  automationRules.forEach((rule, index) => {
    const div = document.createElement("div");
    div.className = "automation-rule";
    div.style = "border: 1px solid #ddd; margin: 10px; padding: 10px; border-radius: 10px; background-color: #f3e6f6;";

    div.innerHTML = `
      <h4 style="color: purple">${rule.type}</h4>
      <strong>${rule.title}</strong>
      <p>${rule.description}</p>
      <button onclick="editRule(${index})">Edit</button>
      <button onclick="disableRule(${index})">Disable</button>
    `;
    container.appendChild(div);
  });
}

function saveRule() {
  const name = document.getElementById("ruleName").value;
  const trigger = document.getElementById("trigger").value;
  const action = document.getElementById("action").value;

  if (!name || !trigger || !action) {
    alert("Please fill in all fields.");
    return;
  }

  automationRules.push({
    type: "Custom",
    title: name,
    description: `Trigger: ${trigger}, Action: ${action}`
  });

  renderAutomationList();
  clearInputs();
}

function createRule() {
  alert("Rule has been created.");
  // Add logic to send rule to server if needed
}

function editRule(index) {
  const rule = automationRules[index];
  document.getElementById("ruleName").value = rule.title;
  document.getElementById("trigger").value = "Edit the trigger";
  document.getElementById("action").value = "Edit the action";
}

function disableRule(index) {
  automationRules.splice(index, 1);
  renderAutomationList();
}

function clearInputs() {
  document.getElementById("ruleName").value = "";
  document.getElementById("trigger").value = "";
  document.getElementById("action").value = "";
}

// Initialize list
window.onload = renderAutomationList;
