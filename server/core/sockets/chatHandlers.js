module.exports = (io, socket) => {

    socket.on('join-room', (roomName) =>{
        socket.join(roomName);
        console.log(`User ${socket.id} joined room ${roomName}`)
    })

    socket.on('send-message', (data) => {
        io.to(data.room).emit('new-message', {
            user:socket.id,
            text: data.message
        });
    });

    socket.on('disconnect-room', (roomName) => {
        socket.leave(roomName);
        console.log(`User ${socket.id} left room ${roomName}`)
    })
};