// Get modal elements
const loginModal = document.getElementById("login");
const signUpModal = document.getElementById("signup");

// Get buttons to open modals
const loginBtn = document.getElementById("loginbtn");
const signUpBtn = document.getElementById("signupbtn");

// Get close buttons
const closeLogin = document.getElementById("closelogin");
const closeSignUp = document.getElementById("closesignup");

// Open login modal
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "block";
});

// Open signup modal
signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();
    signUpModal.style.display = "block";
});

// Close login modal
closeLogin.addEventListener("click", function () {
    loginModal.style.display = "none";
});

// Close signup modal
closeSignUp.addEventListener("click", function () {
    signUpModal.style.display = "none";
});

// Close modal if the user clicks outside the content area
window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (e.target === signUpModal) {
        signUpModal.style.display = "none";
    }
});

// Handle login form submission
document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;

    // Backend integration for login
    fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
        .then(response => response.text())
        .then(data => {
            if (data.includes("success")) {
                alert("Login Successful!");
                loginModal.style.display = "none";
            } else {
                alert("Login Failed: " + data);
            }
        })
        .catch(error => console.error("Error:", error));
});

// Handle signup form submission
document.getElementById("signupform").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupname").value;
    const email = document.getElementById("signupemail").value;
    const password = document.getElementById("signuppassword").value;

    // Backend integration for signup
    fetch("signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
        .then(response => response.text())
        .then(data => {
            if (data.includes("success")) {
                alert("Sign-Up Successful!");
                signUpModal.style.display = "none";
            } else {
                alert("Sign-Up Failed: " + data);
            }
        })
        .catch(error => console.error("Error:", error));
});