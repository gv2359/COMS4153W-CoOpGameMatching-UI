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

function closeLoginModal() {
    loginModal.style.display = "none";
}

function closeRegisterModal() {
    registerModal.style.display = 'none';
}
// document.getElementById("closeRegisterModal").addEventListener("click", closeRegisterModal);

/**
 * Handles the registration process when the registration form is submitted.
 * Prevents the default form submission behavior, gathers form data, and sends it to the server.
 * Displays appropriate messages based on the server response.
 *
 * @param {Event} event - The event object representing the form submission event.
 * @returns {Promise<void>} - A promise that resolves when the registration process is complete.
 */
async function handleLogin(event) {
    console.log("Logging in user...");
    // event.preventDefault();
    // const formData = new FormData(event.target);
    // const formValues = Object.fromEntries(formData.entries());

    const loginUrl = "http://localhost:8000/login";

    const registerData = {
        emailId: "user@user.com",
        password: "1234"
    };

    try {
        const response = fetch(loginUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        console.log(response.json())


        if (response.status === 400) {
            alert("User not valid");
            return;
        }

        if (!response.ok) {
            console.error("Login failed:", response);
            throw new Error('Login failed');
        }

        const result = await response.json();
        console.log("Login successful:", result);
        alert("User Logged in successfully!");
        closeLoginModal();
    } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong");
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

    registerUrl = "http://localhost:8000/register";

    const registerData = {
        userId: formValues.username, 
        email: formValues.email,  
        password: "",
        displayName: "string",
        steamID: "string"
    };

    try {
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData)
        });

        if (response.status === 400) {
            alert("User already exists.");
            return;
        }

        if (!response.ok) {
            console.error("Registration failed:", response);
            throw new Error('Registration failed');
        }

        const result = await response.json();
        console.log("Registration successful:", result);
        alert("Registration submitted successfully!");
        closeRegisterModal();
    } catch (error) {
        console.error("Registration error:", error);
        alert("Something went wrong");
    }
}

// Register the handleRegister function to the register form submission event
document.getElementById('registerForm').addEventListener('submit', handleRegister);