#  Aegis — Privacy-First Identity Verification

> *Built to verify. Designed to protect.*

Aegis is a masked token identity verification platform built for institutions and partner organizations. Instead of sharing raw personal data, users generate temporary **privacy mask tokens** that verifiers can validate through the Aegis API — confirming identity without exposing sensitive details.

Built as an MVP for a hackathon (HAKATONTON), Aegis is developed by **Jake / BSIS, CIIT Philippines** © 2026.

---

##  Features

- **Privacy Mask Tokens** — Users generate short-lived tokens that represent their identity without revealing personal data
- **Token Verification API** — Organizations verify a token's validity (active or expired) via a REST endpoint
- **Audit Logs** — Every verification attempt is logged with verifier name, organization, result, and timestamp
- **Interactive Demo** — A live masking interface lets users toggle between a shielded and revealed identity profile
- **Institutional Contact Form** — Organizations can submit partnership or demo requests directly through the platform
- **Product Page** — Full marketing page describing the Aegis platform and its value proposition
- **Responsive Design** — Mobile-friendly layout across all pages

---

##  Project Structure

```
hakatonton/
├── pages/
│   ├── index.js              # Homepage — hero, how it works, features
│   ├── product.js            # Product overview page
│   ├── demo.js               # Interactive identity masking demo
│   ├── contact.js            # Contact Sales info page
│   ├── contact_form.js       # Institutional inquiry form
│   └── api/
│       ├── create.js         # POST — creates a new mask token
│       ├── verify.js         # POST — verifies a token's validity
│       └── logs.js           # GET  — retrieves verification logs for a token
├── lib/
│   ├── firebaseAdmin.js      # Firebase Admin SDK setup (Firestore)
│   └── token.js              # Token generation and expiry utilities
├── public/
│   └── logos/                # Images, logo assets, and background graphics
├── .env.local                # Environment variables (not committed)
├── firebase.json             # Firebase project config
├── next.config.js            # Next.js configuration
└── package.json
```

---

##  Setup & Installation

### Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- A [Firebase](https://firebase.google.com/) project with **Firestore** enabled
- A Firebase service account key (for the Admin SDK)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/hakatonton.git
   cd hakatonton
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your Firebase credentials:
   ```env
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_CLIENT_EMAIL=your_client_email
   FIREBASE_PRIVATE_KEY="your_private_key"
   ```

   > These values come from your Firebase project's **Service Account** key (Settings → Service Accounts → Generate new private key).

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app** in your browser:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

---

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/masks/create` | Creates a new privacy mask token |
| `POST` | `/api/masks/verify` | Verifies a token (returns `valid` or `expired`) |
| `GET`  | `/api/masks/logs?token=...` | Retrieves the verification log for a token |

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (pages + API routes) |
| [React 19](https://react.dev/) | UI components |
| [Firebase / Firestore](https://firebase.google.com/) | Token storage and verification logs |
| [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) | Server-side Firestore access |
| [Lucide React](https://lucide.dev/) | Icon library |
| TypeScript (dev) | Type checking |

---

## 📄 License

ISC — © 2026 Aegis, BSIS.
