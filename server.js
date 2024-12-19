// Import the WebSocket library
const WebSocket = require('ws')
const PORT = process.env.PORT || 8081;
const wss = new WebSocket.Server({ port: PORT })
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
})
