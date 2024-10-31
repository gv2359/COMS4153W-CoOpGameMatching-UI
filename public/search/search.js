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
let current_game_id = "";

// Hide pagination buttons initially
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
prevButton.style.display = "none";
nextButton.style.display = "none";

async function performSearch() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm.trim() !== "") {
        try {
            const url = new URL(`http://127.0.0.1:8002/games`);
            url.searchParams.append('page', currentPage);
            url.searchParams.append('page_size', gamesPerPage);
            url.searchParams.append('title', searchTerm.trim());
        
            
            const response = await fetch(url, {
                headers: {
                    'accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch games");
            }

            const data = await response.json();
            // console.log("Fetched data:", data);
            games = data.games;
            updatePaginationButtons(data.links);
            displayGames();

        } catch (error) {
            console.error("Error fetching games:", error);
            alert("An error occurred while fetching games.");
        }
    }
}

function displayGames() {
    const gameList = document.getElementById("gameList");
    gameList.innerHTML = "";
    
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `
            <h3 onclick="showGameInfo(games[${i}])">${game.title}</h3>
        `;
        gameList.appendChild(gameItem);
    }
}

function updatePaginationButtons(links) {
    prevButton.style.display = links.prev ? "block" : "none";
    nextButton.style.display = links.next ? "block" : "none";
}

function nextPage() {
    currentPage++;
    performSearch();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        performSearch();
    }
}



function showGameInfo(gameData) {
    current_game_id = gameData.gameId;
    document.getElementById("gameTitle").textContent = gameData.title;
    document.getElementById("gameImage").src = gameData.image;
    document.getElementById("gameDescription").textContent = gameData.description;
    gameModal.style.display = "block";
}


function showMatchRequestForm() {
    gameModal.style.display = "none";
    matchRequestModal.style.display = "block";
}

// function handleMatchRequest(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const matchData = Object.fromEntries(formData.entries());
    
//     // Here you would typically send this data to your backend
//     console.log("Match request data:", matchData);
    
//     alert("Match request submitted successfully!");
//     matchRequestModal.style.display = "none";
// }

async function handleMatchRequest(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const matchData = Object.fromEntries(formData.entries());
    const matchData = {
        // userId: formData.get('steamId'),
        userId: '12345',
        gameId: current_game_id,
        expireDate: formData.get('expirationDate'),
        isActive: true,
        isCancelled: false
    };

    console.log('match:', matchData);
    
    try {
        const response = await fetch('http://127.0.0.1:8002/match-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(matchData)
        });

        if (!response.ok) {
            throw new Error('Failed to create match request');
        }

        const data = await response.json();
        console.log('Match request created:', data);
        alert('Match request submitted successfully!');
    } catch (error) {
        console.error('Error creating match request:', error);
        alert('An error occurred while creating match request.');
    }
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
