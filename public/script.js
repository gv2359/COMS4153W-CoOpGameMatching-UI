const closeBtns = document.getElementsByClassName("close");
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");

// Close button functionality for both modals
Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Open login modal
function showLoginModal() {
    loginModal.style.display = "block";
}

// Open register modal
function showRegisterModal() {
    registerModal.style.display = "block";
}

function closeRegisterModal() {
    registerModal.style.display = 'none';
}
document.getElementById("closeRegisterModal").addEventListener("click", closeRegisterModal);


// Function to handle login
async function handleLogin(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Check if there’s already a token in localStorage
    // console.log("Checking if user is already logged in...");
    // console.log(localStorage.getItem("token"));
    // if (localStorage.getItem("token")) {
    //         alert("You are already logged in.");
    //         return;
    // }
    
    const emailId = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    const loginData = {
        emailId: emailId,
        password: password
    };

    try {
        const response = await fetch('http://localhost:8001/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const result = await response.json();
            // console.log("Login successful:", result);
            alert("Login successful!");
            
            // Save the token in local storage or cookies if needed
            // localStorage.setItem("token", result.access_token);
            window.location.href = "/search-games";

            // Close the modal
            loginModal.style.display = "none";
        } else {
            const error = await response.json();
            console.error("Login failed:", error);
            alert(`Login failed: ${error.detail}`);
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong during login.");
    }
}

// Register the handleLogin function to the login form submission event
document.getElementById('loginForm').addEventListener('submit', handleLogin);


async function handleLogout() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("You are not logged in.");
        return;
    }

    try {
        const response = await fetch('http://localhost:8001/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            alert("Logged out successfully!");
            // Clear the token from localStorage
            localStorage.removeItem("token");
        } else {
            const error = await response.json();
            console.error("Logout failed:", error);
            alert(`Logout failed: ${error.detail}`);
        }
    } catch (error) {
        console.error("Logout error:", error);
        alert("Something went wrong during logout.");
    }
}


/**
 * Handles the registration process when the registration form is submitted.
 * Prevents the default form submission behavior, gathers form data, and sends it to the server.
 * Displays appropriate messages based on the server response.
 * 
 * @param {Event} event - The event object representing the form submission event.
 * @returns {Promise<void>} - A promise that resolves when the registration process is complete.
 */
async function handleRegister(event) {
    console.log("Registering user...");
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    const registerData = {
        userName: formData.get('username'), 
        emailId: formData.get('email'),
        password: formData.get('password'),
        displayName: "string",
        steamID: "string"
    };

    try {
        const response = await fetch('http://localhost:8001/register', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData)
        });
        console.log(response.status);
        if (response.status === 400) {
            alert("User already exists.");
            return;
        }

        if (!response.ok) {
            const error = await response.json();
            console.error("Registration failed:", error);
            alert(`Registration failed: ${error.detail}`);
            return;
        }

        const result = await response.json();
        console.log("Registration successful:", result);
        alert("Registration submitted successfully!");

        // Close the modal after successful registration
        registerModal.style.display = "none";
    } catch (error) {
        console.error("Registration error:", error);
        alert("Something went wrong");
    }
}

// Register the handleRegister function to the register form submission event
document.getElementById('registerForm').addEventListener('submit', handleRegister);