// Basic engine that plays the decision tree in STORY (NODES)
const els = {
  storyTitle: document.getElementById("storyTitle"),
  storySubtitle: document.getElementById("storySubtitle"),
  nodeTitle: document.getElementById("nodeTitle"),
  nodeText: document.getElementById("nodeText"),
  nodeTag: document.getElementById("nodeTag"),
  choices: document.getElementById("choices"),
  endingBox: document.getElementById("endingBox"),
  progress: document.getElementById("progress"),
  btnRestart: document.getElementById("btnRestart"),
  btnBack: document.getElementById("btnBack"),
};

// ===== Socket settings =====
// If running locally: "http://localhost:3000"
// If deployed later: "https://your-server.onrender.com"
const SOCKET_URL = "http://localhost:3000";

// session + group identity (prompts)
const sessionCode = prompt("Enter session code:", "1234") || "1234";
const groupId = prompt("Enter group name:", "Group1") || "Group1";

// connect
const socket = io(SOCKET_URL);

// Join only after connect (more reliable)
socket.on("connect", () => {
  console.log("PLAYER connected:", socket.id);
  socket.emit("join_session", { sessionCode, role: "player", groupId });
  console.log("Joined session:", sessionCode, "as", groupId);
});

socket.on("connect_error", (e) => {
  console.log("PLAYER connect error:", e.message);
});

socket.on("disconnect", () => {
  console.log("PLAYER disconnected");
});

// optional: listen for updates (debug)
socket.on("choice_update", (ev) => {
  console.log("Live update:", ev);
});

let currentId = "start";
let history = []; // stack for Back button

// --- persistence (optional) ---
const SAVE_KEY = "choice_story_save_v1";

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({ currentId, history }));
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    if (data?.currentId && NODES[data.currentId]) {
      currentId = data.currentId;
      history = Array.isArray(data.history) ? data.history : [];
      return true;
    }
  } catch {}
  return false;
}

function clearSave() {
  localStorage.removeItem(SAVE_KEY);
}

function renderNode(id) {
  const node = NODES[id];

  if (!node) {
    els.nodeTitle.textContent = "Missing node";
    els.nodeText.textContent = `Node "${id}" was not found in story.js`;
    els.choices.innerHTML = "";
    els.nodeTag.textContent = "ERROR";
    els.endingBox.classList.remove("hidden");
    return;
  }

  // header
  els.storyTitle.textContent = STORY_META?.title || "Choice Story";
  els.storySubtitle.textContent = STORY_META?.subtitle || "";

  // content
  els.nodeTitle.textContent = node.title || "";
  els.nodeText.textContent = node.text || "";
  els.nodeTag.textContent = node.tag || "SCENE";
  els.progress.textContent = `${history.length} step${history.length === 1 ? "" : "s"}`;

  // clear previous choices
  els.choices.innerHTML = "";
  const choices = node.choices || [];

  // ending display
  const isEnding = choices.length === 0;
  els.endingBox.classList.toggle("hidden", !isEnding);

  // back button disabled if no history
  els.btnBack.disabled = history.length === 0;

  // render choice buttons
  choices.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "choiceBtn";
    btn.textContent = c.text;

    btn.addEventListener("click", () => {
      // 1) send to server for dashboard
      socket.emit("pick_choice", {
        sessionCode,
        groupId,
        nodeId: currentId,
        choiceText: c.text,
        nextNodeId: c.next,
      });

      // 2) continue story locally
      goTo(c.next);
    });

    els.choices.appendChild(btn);
  });

  saveGame();
}

function goTo(nextId) {
  if (!NODES[nextId]) {
    alert(`Next node "${nextId}" does not exist. Check story.js`);
    return;
  }
  history.push(currentId);
  currentId = nextId;
  renderNode(currentId);
}

function back() {
  if (history.length === 0) return;
  currentId = history.pop();
  renderNode(currentId);
}

function restart() {
  currentId = "start";
  history = [];
  clearSave();
  renderNode(currentId);
}

// Buttons
els.btnRestart.addEventListener("click", restart);
els.btnBack.addEventListener("click", back);

// Start: load save if available, else start fresh
loadGame();
renderNode(currentId);