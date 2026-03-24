# Choice Story: Interactive Decision Engine

The **Choice Story** project is a real-time, web-based interactive fiction engine. It allows players to navigate complex narrative branches while a backend server tracks their progress and choices for administrative or group-viewing purposes.

---

## ## Features & Functionality

The application is built to provide a seamless "Choose Your Own Adventure" experience with live synchronization:

* **Dynamic Narrative Engine**: Plays through a decision tree defined in `story.js`, rendering scenes with unique titles, tags, and text.
* **Real-Time Synchronization**: Uses **Socket.io** to emit player choices to a central dashboard, allowing for live monitoring of group decisions.
* **Persistent State**: Features a local history and "Back" functionality, allowing players to undo choices and explore different story paths.
* **Responsive UI**: A modern, dark-themed interface built with CSS variables and radial gradients for an immersive reading experience.
* **Session Management**: Supports unique session codes and group identifiers so multiple teams can play simultaneously without data overlap.

---

## ## Technical Architecture

The system utilizes a client-server model to bridge local gameplay with remote monitoring:



* **Frontend (`index.html`, `script.js`)**: The "Player" interface that handles input and local state management.
* **Story Logic (`story.js`)**: A structured JSON-like object containing all narrative nodes and choice-based redirects.
* **Backend (`server.js`)**: A Node.js server using Express and Socket.io to manage room joins and broadcast choice events.
* **Styling (`style.css`)**: A comprehensive stylesheet managing the "card" layout, typography, and interactive button states.

---

## ## Setup & Installation

To get the Choice Story engine running locally, follow these steps:

### ### 1. Prerequisites
* **Node.js** installed on your machine.
* A code editor (e.g., VS Code).

### ### 2. Backend Setup
1.  Navigate to the project folder in your terminal.
2.  Install dependencies: `npm install express socket.io`.
3.  Start the synchronization server: `node server.js`.
    * *Note: The server defaults to port 3000.*

### ### 3. Frontend Setup
1.  Open `script.js` and verify the `SOCKET_URL` matches your local server address (default is `http://localhost:3000`).
2.  Open `index.html` in a web browser to start the story.
3.  Enter a **Session Code** and **Group Name** when prompted to link your progress to the dashboard.

---

## ## Story Structure Example
The story is organized into "Nodes." Each node requires a unique ID and a set of choices that point to the next node:

```javascript
// Example from story.js
start: {
  title: "The Beginning",
  text: "You are at a crossroads...",
  choices: [
    { text: "Go to work", next: "day5_main" },
    { text: "Skip work", next: "day6_skip" }
  ]
}
