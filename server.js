const WebSocket = require('ws');
const PORT = process.env.PORT || 8081;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', ws => {
  console.log('A client connected');
  ws.send('Welcome!'); // Send "Welcome!" to the client when they connect

  ws.on('message', message => {
    console.log(`Received: ${message}`);
  });

  ws.on('close', () => {
    console.log('A client disconnected');
  });
});

console.log(`Server running on ws://localhost:${PORT}`);
