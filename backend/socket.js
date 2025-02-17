const socketIO = (io) => {
  let games = new Map();
  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const storedSocketId = socket.handshake.auth.id; // Access the id here
    console.log("old id: ", storedSocketId);

    if (storedSocketId) {
      const roomId = socket.handshake.auth.roomId;
      const game = games.get(roomId);
      if (game) {
        const playerExists = game.players.some(
          (player) => player.id === storedSocketId
        );

        if (playerExists) {
          socket.join(roomId);
          io.to(roomId).emit("receiveGame", games.get(roomId));
        }
      }
    }

    // cannot make him a player until he has chosen a color so join room and join game has to be 2 diff events
    socket.on("joinGame", (data) => {
      console.log("game joined", data);
      const roomCode = data.roomCode;
      const player = {
        name: data.name,
        color: data.chosenColor,
        position: [0, 0],
        id: socket.id,
      };
      if (!games.get(roomCode)) {
        games.set(roomCode, { players: [player] });
      } else {
        games.set(roomCode, {
          players: [...games.get(roomCode).players, player],
        });
      }
      io.to(roomCode).emit("receiveGame", games.get(roomCode));
    });

    socket.on("joinRoom", (data) => {
      console.log("room joined", data);
      const roomCode = data.roomCode;
      socket.join(roomCode);
      io.to(roomCode).emit("receiveGame", games.get(roomCode));
    });

    socket.on("getGame", (roomCode) => {
      socket.emit("receiveGame", games.get(roomCode));
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = {
  socketIO,
};
