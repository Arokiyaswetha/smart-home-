// Example JavaScript to handle tab switching and notification rendering

const tabs = document.querySelectorAll('.tab');
const notifications = {
  all: [
    { title: 'System Update Applied', desc: 'Energy settings updates successfully.', type: 'update' },
    { title: 'Unauthorized Access Attempt', desc: 'Guest access denied at 10:42 AM.', type: 'alert' },
    { title: 'Device Offline', desc: 'Living Room Camera disconnected.', type: 'warning' },
    { title: 'New Guest Added', desc: 'Guest profile created by Homeowner.', type: 'update' },
    { title: 'Security Alert', desc: 'Multiple failed login attempts detected.', type: 'alert' }
  ]
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selected = tab.dataset.type; // 'all', 'warnings', 'alert', 'updates'
    renderNotifications(selected);
  });
});

function renderNotifications(type) {
  const list = document.getElementById('notificationList');
  list.innerHTML = '';

  const filtered = type === 'all' 
    ? notifications.all 
    : notifications.all.filter(n => n.type === type);

  filtered.forEach(n => {
    const item = document.createElement('div');
    item.className = 'notification-item';
    item.innerHTML = `
      <div class="icon-placeholder"></div>
      <div>
        <strong>${n.title}</strong>
        <p>${n.desc}</p>
      </div>
    `;
    list.appendChild(item);
  });
}

// Initialize with all
renderNotifications('all');
