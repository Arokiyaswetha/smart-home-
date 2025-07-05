// Handle Sign In
function signIn() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!username || !password || !role) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  // Simulated user database (replace with API call in real app)
  const users = [
    { username: "admin@smartaura.com", password: "admin123", role: "Admin" },
    { username: "homeowner@smartaura.com", password: "home123", role: "Homeowner" },
    { username: "guest@smartaura.com", password: "guest123", role: "Guest" }
  ];

  const matchedUser = users.find(
    user => user.username === username && user.password === password && user.role === role
  );

  if (matchedUser) {
    alert(`✅ Welcome back, ${role}!`);
    // Redirect to dashboard (example)
    // window.location.href = "/dashboard.html";
  } else {
    alert("❌ Invalid credentials or role. Please try again.");
  }
}
