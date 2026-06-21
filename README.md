# 🧠 ThinkBoard

ThinkBoard is a premium, modern, glassmorphic notes application built on the **MERN** stack. It offers full CRUD operations for managing notes, integrated with MongoDB Atlas for persistent storage, Vite + React + Tailwind CSS v4 + DaisyUI for a stunning UI experience, and Upstash Redis for rate limiting API traffic.

---

url - https://mern-think-board-329m.onrender.com
## 🚀 Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
<br/>
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis (Upstash)](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

---

## ✨ Features

- 💎 **Premium Glassmorphic UI**: High-end styling featuring interactive glass cards, glow inputs, animated gradients, smooth micro-animations, and a cohesive modern dark theme.
- 📝 **Full CRUD Operations**: Create, view, edit, and delete notes instantly.
- ⚡ **Vite Proxy Integration**: Zero CORS friction in local development through Vite's API proxying.
- 🛡️ **Upstash Redis Rate Limiting**: Intelligent backend middleware to limit excessive requests (3 requests per 10 seconds, sliding window).
- 🔄 **Auto-loading Skeletal States**: Clean loading skeletons and custom loaders for a smooth user experience.
- 🔔 **Toast Notifications**: Built-in visual alerts with React Hot Toast for UI events (creation, edits, deletes, rate limit triggers).

---

## 📂 Project Structure

```text
MERN-THINKBOARD/
├── backend/
│   ├── src/
│   │   ├── Controller/
│   │   │   └── notesController.js   # Note controllers (CRUD logic)
│   │   ├── config/
│   │   │   ├── db.js                # MongoDB connection handler
│   │   │   └── upstash.js           # Upstash Redis rate limiter setup
│   │   ├── model/
│   │   │   └── Note.js              # Mongoose schema for Notes
│   │   ├── routes/
│   │   │   └── notesRoutes.js       # Notes router endpoints
│   │   └── server.js                # Main Express server entry point
│   ├── .env                         # Server environment variables
│   ├── package.json
│   └── README.md
└── frontEnd/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx           # Frosted glass navbar
    │   │   ├── NoteCard.jsx         # Note card with hover-glow & lift
    │   │   ├── NotesNotFound.jsx    # Styled empty state
    │   │   └── RateLimitedUI.jsx    # Warning UI for 429 status
    │   ├── lib/
    │   │   └── axios.js             # API request instance
    │   ├── pages/
    │   │   ├── CreatePage.jsx       # Notes creator form
    │   │   ├── HomePage.jsx         # Notes grid view
    │   │   └── NoteDetailPage.jsx   # Detailed note / edit viewer
    │   ├── App.jsx                  # Main router config
    │   ├── index.css                # Custom UI styling system
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js               # Proxy setup (/api -> server)
    └── README.md
```

---

## 🛠️ Prerequisites

Make sure you have the following installed/setup before starting:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **MongoDB Atlas** database account
- **Upstash** account (for Redis Rate Limiting)

---

## 🔑 Environment Variables Setup

Create a `.env` file inside the `backend/` directory and add the following variables:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

> [!IMPORTANT]
> - Ensure your database credentials and Upstash credentials are correct.
> - **MongoDB IP Access**: You must whitelist the current IP address in your MongoDB Atlas Dashboard (`Network Access` -> `Add IP Address`) to prevent connection timeouts/errors.

---

## ⚙️ Installation & Running

Follow these steps to run the application locally:

### 1. Clone & Open
Navigate into the project root directory.

### 2. Setup Backend
In your terminal, navigate to the `backend` folder, install the dependencies, and start the development server:
```bash
cd backend
npm install
npm run dev
```
The server will start running on `http://localhost:5001`.

### 3. Setup Frontend
Open a new terminal window, navigate to the `frontEnd` folder, install dependencies, and start the Vite dev server:
```bash
cd frontEnd
npm install
npm run dev
```
The client will start running on `http://localhost:5173`. Open your browser to that address.

---

## 🔗 Backend API Endpoints

The API is mounted under `/api/notes`.

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/notes` | Retrieve all notes (sorted newest first) | *None* |
| **GET** | `/api/notes/:id` | Get a specific note by ID | *None* |
| **POST** | `/api/notes` | Create a new note | `{ "title": "...", "content": "..." }` |
| **PUT** | `/api/notes/:id` | Update an existing note | `{ "title": "...", "content": "..." }` |
| **DELETE** | `/api/notes/:id` | Delete a note by ID | *None* |

---

## ⚠️ Troubleshooting & Common Issues

- **Database Connection Error ("Could not connect to any servers")**
  Ensure your MongoDB Atlas network settings allow connection. Whitelist your IP in `MongoDB Atlas` -> `Network Access`.
- **Rate Limit Triggered (429 HTTP Error)**
  The app contains Upstash rate limiting set to **3 requests per 10 seconds** per IP to protect resources. If you trigger this limit, a custom rate-limiting banner will temporarily appear on your UI. Wait a few seconds and try again.
