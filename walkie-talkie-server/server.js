// Import the WebSocket library
const WebSocket = require('ws');

// Set up the WebSocket server
const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

// When a client connects, set up communication
wss.on('connection', ws => {
  console.log('A client connected');

  // Listen for binary messages (audio data) from the client (your ESP32)
  ws.on('message', (message) => {
    if (message instanceof Buffer) {
      console.log('Received audio data');
      // Broadcast the audio data to all connected clients (your other walkie-talkies)
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);  // Send the audio data to the other clients
        }
      });
    }
  });

  // Send a welcome message to the client when they connect
  ws.send('Welcome to the Walkie-Talkie server!');
});

console.log('Server started on ws://localhost:8080');
