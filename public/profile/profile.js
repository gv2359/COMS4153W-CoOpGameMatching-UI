// This is a mock-up. In a real application, you would fetch this data from your server.
const userData = {
    name: "John Doe",
    email: "john@example.com",
    // steamId: "STEAM_1:2:3456789",
    steamId: "Not yet validated",
    matchRequests: [
        { game: "Portal 2", date: "2023-05-15" },
        { game: "It Takes Two", date: "2023-05-10" },
        { game: "A Way Out", date: "2023-05-05" }
    ]
};

function populateUserData() {
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userEmail').textContent = userData.email;
    document.getElementById('userSteamId').textContent = userData.steamId;

}

document.addEventListener('DOMContentLoaded', function() {
    populateUserData();

    const validateSteamIdButton = document.getElementById("validateSteamIdButton");
    const userSteamId = document.getElementById("userSteamId");

    validateSteamIdButton.addEventListener("click", function() {
        // Simulate Steam ID validation process
        console.log("Validate button clicked!");
        const steamId = "123456789"; // Replace with actual Steam ID retrieval logic

        // Update the Steam ID in userData
        userData.steamId = steamId;

        // Update the Steam ID display
        userSteamId.textContent = steamId;

        // Hide the validate button
        validateSteamIdButton.style.display = "none";
    });

    const profilePictureInput = document.getElementById("profilePictureInput");
    const profilePicture = document.getElementById("profilePicture");
    const uploadProfilePictureButton = document.getElementById("uploadProfilePictureButton");

    uploadProfilePictureButton.addEventListener("click", function() {
        profilePictureInput.click();
    });

    profilePictureInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicture.src = e.target.result;
                // Optionally, save the profile picture to the server here
            };
            reader.readAsDataURL(file);
        }
    });
});