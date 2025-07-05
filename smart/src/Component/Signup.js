// Sign Up form validation and submission
document.getElementById('signUpBtn').addEventListener('click', function () {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const role = document.getElementById('role').value;

  if (!name || !email || !password || !confirmPassword || !role) {
    alert('Please fill out all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Proceed with signup logic (e.g., API call)
  const newUser = {
    name,
    email,
    password,
    role
  };

  console.log('Registering user:', newUser);
  alert('Account created successfully!');
  // Redirect or clear form as needed
});
