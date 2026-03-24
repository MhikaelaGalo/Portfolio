import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // ok for school demo. later restrict to your real URLs.
    methods: ["GET", "POST"],
  },
});

const sessions = new Map();

io.on("connection", (socket) => {
  socket.on("join_session", ({ sessionCode, role, groupId }) => {
    socket.join(sessionCode);
    if (!sessions.has(sessionCode)) {
      sessions.set(sessionCode, { lastByGroup: {}, history: [] });
    }
    socket.emit("session_state", sessions.get(sessionCode));
    io.to(sessionCode).emit("presence", { role, groupId, joinedAt: Date.now() });
  });

  socket.on("pick_choice", ({ sessionCode, groupId, nodeId, choiceText, nextNodeId }) => {
    if (!sessions.has(sessionCode)) {
      sessions.set(sessionCode, { lastByGroup: {}, history: [] });
    }
    const state = sessions.get(sessionCode);

    const ev = { groupId, nodeId, choiceText, nextNodeId, at: Date.now() };

    state.lastByGroup[groupId] = ev;
    state.history.push(ev);

    io.to(sessionCode).emit("choice_update", ev);
  });
});

app.get("/", (req, res) => res.send("Socket server running"));

server.listen(3000, () => console.log("Server running on http://localhost:3000"));