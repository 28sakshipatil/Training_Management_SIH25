document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const org = document.getElementById("org").value.toLowerCase();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (org && username && password) {
    // Save org in localStorage
    localStorage.setItem("org", org.toUpperCase()); // Save as NGO, SDMA, etc.
    localStorage.setItem("username", username); // Optional
    // Redirect to dashboard or form page
    // window.location.href = "add_training.html";
  } else {
    alert("Please fill all fields!");
  }

  // For prototype — simple static redirect
  window.location.href = `dashboards/${org}.html`;
});



