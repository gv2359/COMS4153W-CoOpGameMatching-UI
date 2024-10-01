const gameModal = document.getElementById("gameModal");
const matchRequestModal = document.getElementById("matchRequestModal");
const closeBtns = document.getElementsByClassName("close");
const registerModal = document.getElementById("registerModal");

function performSearch() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm.trim() !== "") {
        // In a real application, you would fetch game data from your backend here
        // For this example, we'll use mock data
        const gameData = {
            title: searchTerm,
            image: "https://via.placeholder.com/200x300.png?text=Game+Image",
            description: `This is a mock description for the game "${searchTerm}". In a real application, this would be actual game information fetched from your database or an external API.`
        };
        showGameInfo(gameData);
    } else {
        alert("Please enter a game title to search.");
    }
}

function showGameInfo(gameData) {
    document.getElementById("gameTitle").textContent = gameData.title;
    document.getElementById("gameImage").src = gameData.image;
    document.getElementById("gameDescription").textContent = gameData.description;
    gameModal.style.display = "block";
}

function showMatchRequestForm() {
    gameModal.style.display = "none";
    matchRequestModal.style.display = "block";
}

function handleMatchRequest(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const matchData = Object.fromEntries(formData.entries());
    
    // Here you would typically send this data to your backend
    console.log("Match request data:", matchData);
    
    alert("Match request submitted successfully!");
    matchRequestModal.style.display = "none";
}

// Close button functionality for both modals
Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        gameModal.style.display = "none";
        matchRequestModal.style.display = "none";
        registerModal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == gameModal) {
        gameModal.style.display = "none";
    }
    if (event.target == matchRequestModal) {
        matchRequestModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

function showRegisterModal() {
    registerModal.style.display = "block";
}

function closeRegisterModal() {
    registerModal.style.display = "none";
}

async function handleRegister(event) {
    console.log("Registering user...");
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    const registerData = {
        userId: formValues.username, 
        email: formValues.email,  
        password: "",
        displayName: "string",
        steamID: "string"
    };

    try {
        const response = await fetch('YOUR URL HERE...', {
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

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-button').addEventListener('click', performSearch);

document.getElementById('matchRequestForm').addEventListener('submit', handleMatchRequest);

document.getElementById('registerForm').addEventListener('submit', handleRegister);