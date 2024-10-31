// This is a mock-up. In a real application, you would fetch this data from your server.
// const userData = {
//     // name: "John Doe",
//     // email: "john@example.com",
//     // // steamId: "STEAM_1:2:3456789",
//     // steamId: "Not yet validated",
//     matchRequests: [
//         { game: "Portal 2", date: "2023-05-15" },
//         { game: "It Takes Two", date: "2023-05-10" },
//         { game: "A Way Out", date: "2023-05-05" },
//         { game: "Portal 2", date: "2023-05-15" },
//         { game: "It Takes Two", date: "2023-05-10" },
//         { game: "A Way Out", date: "2023-05-05" },
//         { game: "Game1", date: "2023-05-15" },
//         { game: "Game2", date: "2023-05-10" },
//         { game: "Game3", date: "2023-05-05" },
//         { game: "Game4", date: "2023-05-15" },
//         { game: "Game5", date: "2023-05-10" },
//         { game: "Game6", date: "2023-05-05" },
//         { game: "Game7", date: "2023-05-15" },
//         { game: "Game8", date: "2023-05-10" },
//         { game: "Game9", date: "2023-05-05" },
//         { game: "Game10", date: "2023-05-15" },
//         { game: "Game11", date: "2023-05-10" },
//         { game: "Game12", date: "2023-05-05" }]};

let currentPage = 1;
const matchesPerPage = 5;


// Hide pagination buttons initially
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
// prevButton.style.display = "block";
// nextButton.style.display = "block";

async function populateMatchData() {
    // document.getElementById('userName').textContent = userData.name;
    // document.getElementById('userEmail').textContent = userData.email;
    // document.getElementById('userSteamId').textContent = userData.steamId;

    const matchRequestsList = document.getElementById('matchRequestsList');
    matchRequestsList.innerHTML = "";

    const matchRequestsData = await fetchMatchData();


    matchRequestsData.forEach(request => {
        const li = document.createElement('li');
        li.textContent = `Game ID - ${request.gameId} - Expiring on ${request.expireDate}`;
        matchRequestsList.appendChild(li);
    });

    document.getElementById("prevButton").style.display = currentPage > 1 ? "block" : "none";
    //document.getElementById("nextButton").style.display = (currentPage*matchesPerPage) < games.length ? "block" : "none";
}

async function fetchMatchData() {

    const paginatedMatchesUrl = `http://127.0.0.1:8002/match-requests?page=${currentPage}&page_size=${matchesPerPage}`;

    let response = await fetch(paginatedMatchesUrl, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response => response.json()))

    console.log(response);

    return response.matchRequests;
}


async function nextPage() {
        currentPage++;
        await populateMatchData();
}

async function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        await populateMatchData();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateMatchData();
});