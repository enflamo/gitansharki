const socket = io();
let playerName = '';

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('updatePlayers', (players) => {
    displayPlayers(players);
});

socket.on('startGame', ({ question, targetPlayerId }) => {
    displayQuestion(question);
    if (socket.id === targetPlayerId) {
        displayAnswerInput();
    }
});

socket.on('updateAnswers', ({ playerId, answer }) => {
    displayPlayerAnswer(playerId, answer);
});

socket.on('updateVotes', ({ voterId, votedPlayerId }) => {
    // Traiter les votes des joueurs
});

function joinGame() {
    playerName = document.getElementById('playerNameInput').value.trim();
    if (playerName) {
        socket.emit('joinGame', playerName);
        document.getElementById('lobby').style.display = 'none';
        document.getElementById('question-container').style.display = 'block';
    }
}

function submitAnswer() {
    const answer = document.getElementById('answer').value.trim();
    socket.emit('submitAnswer', answer);
    document.getElementById('answer').value = '';
}

function submitVote(votedPlayerId) {
    socket.emit('submitVote', votedPlayerId);
}

function displayQuestion(question) {
    document.getElementById('question').textContent = question;
}

function displayAnswerInput() {
    document.getElementById('answer').style.display = 'block';
    document.getElementById('submit-answer-btn').style.display = 'block';
}

function displayPlayers(players) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player.name;
        playersList.appendChild(li);
    });
}
