// MFA Verification logic
document.getElementById('verifyBtn').addEventListener('click', function () {
  const mfaCode = document.getElementById('mfaCode').value.trim();

  if (!/^\d{6}$/.test(mfaCode)) {
    alert('Please enter a valid 6-digit code.');
    return;
  }

  // Simulate verification
  console.log('Verifying MFA code:', mfaCode);

  // Example success
  alert('MFA verified successfully!');
  // Redirect to dashboard or next step
});
