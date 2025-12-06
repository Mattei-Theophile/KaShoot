const http = require('http');
const app = require('./app');
const socketService = require('./socketService');
const registerChatHandlers = require('./sockets/chatHandlers');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = socketService.init(server);

io.on('connection', (socket) => {
    console.log('Client connected', socket.id);

    registerChatHandlers(io, socket);

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id)
    });
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});