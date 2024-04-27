// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let players = [];
let currentQuestionIndex = 0;
const questions = [
    "Quel est votre plus grand fantasme?",
    "Quel est votre plus gros défaut?",
    // Ajoutez plus de questions selon vos préférences
];

function startGame() {
    io.emit('startGame', questions[currentQuestionIndex]);
}

function endGame() {
    // Calculer le gagnant et envoyer les résultats
}

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('joinGame', (playerName) => {
        players.push({ id: socket.id, name: playerName });
        io.emit('updatePlayers', players);
        if (players.length >= 2) {
            startGame();
        }
    });

    socket.on('submitAnswer', (answer) => {
        io.emit('updateAnswers', { playerId: socket.id, answer });
    });

    socket.on('submitVote', (votedPlayerId) => {
        io.emit('updateVotes', { voterId: socket.id, votedPlayerId });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        players = players.filter(player => player.id !== socket.id);
        io.emit('updatePlayers', players);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
