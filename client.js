const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('updatePlayers', (players) => {
    // Mettre à jour l'affichage des joueurs dans la salle
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
    document.getElementById('question-section').style.display = 'block';
}

function displayAnswerInput() {
    document.getElementById('answer').style.display = 'block';
    document.getElementById('submit-answer-btn').style.display = 'block';
}

function displayPlayerAnswer(playerId, answer) {
    // Ajouter la réponse du joueur à l'interface utilisateur
}

// Vous pouvez ajouter d'autres fonctionnalités et interactions ici
