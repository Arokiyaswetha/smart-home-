const schedules = [
  {
    name: "Morning Lights",
    device: "Living Room",
    time: "06:30 AM",
    days: "Mon-Fri",
    active: true,
  },
  {
    name: "Night lock",
    device: "Front Door",
    time: "11:00 PM",
    days: "Daily",
    active: true,
  },
  {
    name: "Garden Water",
    device: "Backyard",
    time: "07:00 PM",
    days: "Sat-Sun",
    active: false,
  },
];

function renderSchedules() {
  const tableBody = document.querySelector("#scheduleTable tbody");
  tableBody.innerHTML = "";

  schedules.forEach((schedule, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${schedule.name}</td>
      <td>${schedule.device}</td>
      <td>${schedule.time}</td>
      <td>${schedule.days}</td>
      <td>${schedule.active ? "Active" : "Inactive"}</td>
      <td>
        <button onclick="editSchedule(${index})">✏️</button>
        <button onclick="deleteSchedule(${index})">🗑️</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editSchedule(index) {
  const updatedTime = prompt("Enter new time (e.g., 08:00 AM):", schedules[index].time);
  if (updatedTime) {
    schedules[index].time = updatedTime;
    renderSchedules();
  }
}

function deleteSchedule(index) {
  if (confirm("Are you sure you want to delete this schedule?")) {
    schedules.splice(index, 1);
    renderSchedules();
  }
}

// Initialize UI
renderSchedules();
