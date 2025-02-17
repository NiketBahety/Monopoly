require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const http = require("http");
const socket = require("socket.io");

const roomRoutes = require("./routes/roomRoutes");
const { socketIO } = require("./socket");

const app = express();
app.use(cors({ origin: "*" }));

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

socketIO(io);
app.set("socket", io);

app.use("/api", roomRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
