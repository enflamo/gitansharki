// client.js
const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('updatePlayers', (players) => {
    // Mettre à jour l'affichage des joueurs dans la salle
});

socket.on('startGame', (question) => {
    // Afficher la question pour commencer le jeu
});

socket.on('updateAnswers', ({ playerId, answer }) => {
    // Mettre à jour les réponses des joueurs
});

socket.on('updateVotes', ({ voterId, votedPlayerId }) => {
    // Traiter les votes des joueurs
});

function submitAnswer() {
    const answer = document.getElementById('answer').value.trim();
    socket.emit('submitAnswer', answer);
}

function submitVote() {
    // Envoyer le vote sélectionné au serveur
}

// Vous pouvez ajouter d'autres fonctionnalités et interactions ici
