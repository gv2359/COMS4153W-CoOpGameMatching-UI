const gameModal = document.getElementById("gameModal");
const matchRequestModal = document.getElementById("matchRequestModal");
const closeBtns = document.getElementsByClassName("close");

// function performSearch() {
//     const searchTerm = document.querySelector('.search-input').value;
//     if (searchTerm.trim() !== "") {
//         // In a real application, you would fetch game data from your backend here
//         // For this example, we'll use mock data
//         const gameData = {
//             title: searchTerm,
//             image: "https://via.placeholder.com/200x300.png?text=Game+Image",
//             description: `This is a mock description for the game "${searchTerm}". In a real application, this would be actual game information fetched from your database or an external API.`
//         };
//         showGameInfo(gameData);
//     } else {
//         alert("Please enter a game title to search.");
//     }
// }

let currentPage = 1;
const gamesPerPage = 10;
let games = [];

// Hide pagination buttons initially
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
prevButton.style.display = "none";
nextButton.style.display = "none";

function performSearch() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm.trim() !== "") {
        // Simulate fetching game data from backend
        games = Array.from({ length: 50 }, (_, i) => ({
            title: `${searchTerm} Game ${i + 1}`,
            image: "https://via.placeholder.com/200x300.png?text=Game+Image",
            description: `This is a mock description for the game "${searchTerm} Game ${i + 1}".`
        }));
        currentPage = 1;
        displayGames();
    } else {
        alert("Please enter a game title to search.");
    }
}

function displayGames() {
    const gameList = document.getElementById("gameList");
    gameList.innerHTML = "";

    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = Math.min(startIndex + gamesPerPage, games.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const game = games[i];
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `
            <h3 onclick="showGameInfo(games[${i}])">${game.title}</h3>
        `;
        gameList.appendChild(gameItem);
    }

    document.getElementById("prevButton").style.display = currentPage > 1 ? "block" : "none";
    document.getElementById("nextButton").style.display = endIndex < games.length ? "block" : "none";
}

function nextPage() {
    if (currentPage * gamesPerPage < games.length) {
        currentPage++;
        displayGames();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayGames();
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
    }
});

window.onclick = function(event) {
    if (event.target == gameModal) {
        gameModal.style.display = "none";
    }
    if (event.target == matchRequestModal) {
        matchRequestModal.style.display = "none";
    }
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
