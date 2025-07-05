// Reference to buttons and modal
const signOutBtn = document.getElementById('signOutBtn');
const cancelBtn = document.getElementById('cancelBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('signOutModal');

// Open modal (you can trigger this on sign out option click)
function openModal() {
  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
}

// Sign out logic
function handleSignOut() {
  console.log('Signing out...');
  // Add actual sign-out logic here (e.g. API call or redirect)
  window.location.href = '/login'; // example redirect
}

// Event listeners
signOutBtn.addEventListener('click', handleSignOut);
cancelBtn.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

// Optional: Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
