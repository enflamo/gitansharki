const socket = io();
let playerName = '';

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('updatePlayers', (players) => {
    // Peut être utilisé pour mettre à jour la liste des joueurs si nécessaire
});

function joinGame() {
    playerName = prompt('Entrez votre nom:');
    if (playerName) {
        socket.emit('joinGame', playerName);
        window.location.href = 'lobby.html';
    }
}

function startGame() {
    socket.emit('startGame');
    window.location.href = 'game.html';
}
