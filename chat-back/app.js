const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const cors = require("cors");

const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: {
    origin: "*",
    credential: true,
  },
});

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server is running ${PORT}`));

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    console.log(name + ": " + message);
    io.emit("message", { name, message });
  });
});
