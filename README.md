# Simple Real-Time Chat App

A minimal, real-time chat application built with Node.js, Express, Socket.IO, and a basic HTML/CSS/JavaScript frontend. Users can send and receive messages instantly in a single chat room.

## Features
- Real-time messaging using WebSockets (Socket.IO).
- Simple, clean UI with auto-scrolling message display.
- Lightweight and easy to set up.

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended).
- A web browser (e.g., Chrome, Firefox).

## Project Structure



## Setup Instructions
1. **Clone or Download**:
   - Clone this repository or download the files into a local folder (e.g., `chat-app`).

2. **Install Dependencies**:
   - Open a terminal in the `chat-app` folder.
   - Run:
     ```bash
     npm init -y
     npm install express socket.io
     ```
   - This sets up `package.json` and installs required packages.

3. **Organize Files**:
   - Ensure `index.html`, `styles.css`, and `client.js` are in a `public` subfolder.
   - Keep `server.js` in the root folder.

4. **Start the Server**:
   - In the terminal, run:
     ```bash
     node server.js
     ```
   - The server will start on `http://localhost:3000`.

5. **Access the App**:
   - Open `http://localhost:3000` in a browser.
   - Open multiple tabs to simulate different users.

## Usage
- Type a message in the input field and click "Send" (or press Enter).
- Messages appear instantly in the chat window for all connected users.
- The chat auto-scrolls to the latest message.

## Limitations
- No user authentication or nicknames (all messages are anonymous).
- Messages are not persistent (lost on server restart).
- Single chat room only.

## Potential Improvements
- Add user names or authentication.
- Store messages in a database (e.g., MongoDB).
- Implement private rooms or direct messaging.
- Enhance the UI with themes or emojis.

## Technologies Used
- **Backend**: Node.js, Express, Socket.IO
- **Frontend**: HTML, CSS, JavaScript
- **Real-Time**: Socket.IO WebSockets

## Troubleshooting
- **Port Conflict**: If `3000` is in use, edit `server.js` to change the port (e.g., `server.listen(3001)`).
- **Dependencies Fail**: Ensure Node.js is installed and run `npm install` again.

## License
This project is open-source under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing
Feel free to fork, modify, or submit pull requests! Suggestions for features or bug fixes are welcome.

---
Built on 22nd February, 2025.
