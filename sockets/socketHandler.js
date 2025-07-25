module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('cashout', (data) => {
      // handle cashout logic
      console.log('Player cashed out:', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};