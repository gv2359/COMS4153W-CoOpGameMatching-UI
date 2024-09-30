const gameModal = document.getElementById("gameModal");
const matchRequestModal = document.getElementById("matchRequestModal");
const closeBtns = document.getElementsByClassName("close");

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
    }
});

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == gameModal) {
        gameModal.style.display = "none";
    }
    if (event.target == matchRequestModal) {
        matchRequestModal.style.display = "none";
    }
}

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-button').addEventListener('click', performSearch);

document.getElementById('matchRequestForm').addEventListener('submit', handleMatchRequest);