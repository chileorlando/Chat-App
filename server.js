const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server); // Socket.IO for real-time communication

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// When a user connects to the server
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id); // Log the unique socket ID

    // Listen for incoming chat messages from clients
    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg); // Broadcast the message to all connected clients
        // Using io.emit sends it to everyone, including the sender
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
