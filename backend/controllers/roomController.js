const crypto = require("crypto");

const rooms = [];

function generateRoomCode() {
  const part1 = crypto.randomBytes(2).toString("hex");
  const part2 = crypto.randomBytes(2).toString("hex");
  const part3 = crypto.randomBytes(2).toString("hex");
  return `${part1}-${part2}-${part3}`;
}

const createRoom = (req, res) => {
  const roomCode = generateRoomCode();

  rooms.push(roomCode);

  res.status(201).json({ message: "Room created successfully", roomCode });
};

const checkRoom = (req, res) => {
  const { roomId } = req.params;

  res.status(200).json({ valid: rooms.includes(roomId) });
};

const getGame = (req, res) => {
  const { roomId } = req.params;
  const game = {};

  res.status(200).json({ game });
};

module.exports = {
  createRoom,
  checkRoom,
  getGame,
};
