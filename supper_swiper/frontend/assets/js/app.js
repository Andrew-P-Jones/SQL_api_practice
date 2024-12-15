// API URL (Replace with your actual Flask API endpoint)
const apiUrl = 'http://127.0.0.1:5000';

document.getElementById('host-lobby-btn').addEventListener('click', createLobby);
document.getElementById('join-lobby-btn').addEventListener('click', joinLobby);
document.getElementById('start-button').addEventListener('click', startSwiping);

function createLobby() {
    // Call Flask API to create the lobby (generates table code)
    fetch(`${apiUrl}/create_table`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.table_code) {
            alert(`Lobby created! Table code: ${data.table_code}`);
        } else {
            alert('Cant recieve the data!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error creating the lobby.');
    });
}

function joinLobby() {
    const username = document.getElementById('username').value.trim();
    const lobbyCode = document.getElementById('lobby-code').value.trim();

    if (!username || !lobbyCode) {
        alert('Please enter both username and lobby code!');
        return;
    }

    // Call Flask API to join the lobby
    fetch(`${apiUrl}/add_user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_name: username, table_code: lobbyCode })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'User added successfully') {
            localStorage.setItem('lobby_code', lobbyCode);
            localStorage.setItem('username', username);
            window.location.href = 'wait.html'; // Redirect to waiting room
        } else {
            alert('Error joining lobby!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error joining the lobby.');
    });
}

// Fetch and display participants in the waiting room
function fetchParticipants() {
    const lobbyCode = localStorage.getItem('lobby_code');

    fetch(`${apiUrl}/get_users?table_code=${lobbyCode}`)
    .then(response => response.json())
    .then(data => {
        const participantsList = document.getElementById('participants-list');
        participantsList.innerHTML = ''; // Clear previous list

        if (data.users) {
            data.users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user;
                participantsList.appendChild(li);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching participants:', error);
    });
}

// Call this function on the waiting room page to fetch participants every 5 seconds
setInterval(fetchParticipants, 5000);

function startSwiping() {
    window.location.href = 'swiping.html'; // Redirect to the swiping page
}
