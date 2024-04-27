const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('updatePlayers', (players) => {
    // Mettre à jour l'affichage des joueurs dans la salle
});

socket.on('startGame', (question) => {
    document.getElementById('question').textContent = question;
    document.getElementById('question-section').style.display = 'block';
});

socket.on('updateAnswers', ({ playerId, answer }) => {
    const answersList = document.getElementById('answers-list');
    const li = document.createElement('li');
    li.textContent = answer;
    li.addEventListener('click', () => submitVote(playerId));
    answersList.appendChild(li);
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

// Vous pouvez ajouter d'autres fonctionnalités et interactions ici
