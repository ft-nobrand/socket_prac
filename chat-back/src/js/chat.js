"use strict";

const socket = io();
console.log(socket);

socket.emit("message", "form front");

socket.on("message", (data) => {
  console.log(data);
});
