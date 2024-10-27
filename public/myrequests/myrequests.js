// This is a mock-up. In a real application, you would fetch this data from your server.
const userData = {
    // name: "John Doe",
    // email: "john@example.com",
    // // steamId: "STEAM_1:2:3456789",
    // steamId: "Not yet validated",
    matchRequests: [
        { game: "Portal 2", date: "2023-05-15" },
        { game: "It Takes Two", date: "2023-05-10" },
        { game: "A Way Out", date: "2023-05-05" }
    ]
};

function populateUserData() {
    // document.getElementById('userName').textContent = userData.name;
    // document.getElementById('userEmail').textContent = userData.email;
    // document.getElementById('userSteamId').textContent = userData.steamId;

    const matchRequestsList = document.getElementById('matchRequestsList');
    userData.matchRequests.forEach(request => {
        const li = document.createElement('li');
        li.textContent = `${request.game} - Requested on ${request.date}`;
        matchRequestsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateUserData(); 
});