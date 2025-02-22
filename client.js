// Connect to the Socket.IO server
const socket = io();

// DOM elements
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');

// Handle form submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    const msg = messageInput.value.trim();
    if (msg) {
        socket.emit('chatMessage', msg); // Send message to server
        messageInput.value = ''; // Clear input field
    }
});

// Receive messages from server and display them
socket.on('chatMessage', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to the latest message
});
