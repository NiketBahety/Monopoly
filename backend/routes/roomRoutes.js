const express = require("express");
const {
  createRoom,
  checkRoom,
  getGame,
} = require("../controllers/roomController"); // Import the controller

const router = express.Router();

router.get("/create-room", createRoom);
router.get("/check-room/:roomId", checkRoom);
router.get("/get-game/:roomId", getGame);

module.exports = router;
