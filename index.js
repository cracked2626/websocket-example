const WebSocket = require('ws');
const { handleWebSocketConnection } = require('./src/websocket');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', handleWebSocketConnection);

console.log('WebSocket server is running on ws://localhost:8080');
