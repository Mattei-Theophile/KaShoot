const WebSocket = require('ws');

// Create a new WebSocket Server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('Server started on port 8080');

// Event: 'connection' - triggers when a client connects
wss.on('connection', (ws) => {
    console.log('A new client connected!');

    // Send a welcome message to the client immediately
    ws.send('Welcome to the WebSocket server!');

    // Event: 'message' - triggers when the server receives data from this client
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);

        // Echo the message back to the client
        ws.send(`You said: ${message}`);
    });

    // Event: 'close' - triggers when the client disconnects
    ws.on('close', () => {
        console.log('Client has disconnected');
    });
});