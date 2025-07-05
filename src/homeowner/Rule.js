let savedRules = [];

function saveAutomationRule() {
  const trigger = document.getElementById("trigger").value.trim();
  const condition = document.getElementById("condition").value.trim();
  const action = document.getElementById("action").value.trim();

  if (!trigger || !condition || !action) {
    alert("All fields must be filled out.");
    return;
  }

  const newRule = {
    trigger,
    condition,
    action
  };

  savedRules.push(newRule);
  renderSavedRules();
  clearForm();
}

function cancelAutomationRule() {
  clearForm();
}

function renderSavedRules() {
  const container = document.getElementById("savedRules");
  container.innerHTML = "<h3>Saved Rules:</h3>";

  savedRules.forEach((rule, index) => {
    const ruleDiv = document.createElement("div");
    ruleDiv.style = "padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; background-color: #f3e9f8;";
    ruleDiv.innerHTML = `
      <strong>Trigger:</strong> ${rule.trigger}<br>
      <strong>Condition:</strong> ${rule.condition}<br>
      <strong>Action:</strong> ${rule.action}<br>
      <button onclick="deleteRule(${index})">Delete</button>
    `;
    container.appendChild(ruleDiv);
  });
}

function deleteRule(index) {
  savedRules.splice(index, 1);
  renderSavedRules();
}

function clearForm() {
  document.getElementById("trigger").value = "";
  document.getElementById("condition").value = "";
  document.getElementById("action").value = "";
}
