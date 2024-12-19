const WebSocket = require('ws');

// Set up the WebSocket server
const PORT = process.env.PORT || 8081;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

// Handle client connections
wss.on('connection', (ws, req) => {
  // Get the client's IP address
  const clientIP = req.socket.remoteAddress;
  console.log(`Client connected from IP: ${clientIP}`);

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log(`Client from IP ${clientIP} disconnected.`);
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error(`Error from IP ${clientIP}: ${error}`);
  });
});
