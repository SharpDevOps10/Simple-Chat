const ws = require("ws");

const wss = new ws.Server(
  {
    port: 5000,
  },
  () => console.log(`Server started on 5000`)
);
function broadcastMessage(message) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}