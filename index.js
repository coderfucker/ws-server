const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('new client connection', ws)
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
});

console.log('ws server is running on port 8080')