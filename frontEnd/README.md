# 💎 ThinkBoard - Frontend Client

This is the React client for the ThinkBoard notes application, powered by Vite, Tailwind CSS v4, and DaisyUI. It is styled with a premium dark glassmorphic design system and connects to the backend API via a custom Axios instance.

---

## ✨ Design Features

- 🌌 **Premium Glassmorphic Theme**: Dark mode design featuring radial glowing gradients, frosted glass cards, inputs, and navigations.
- 💫 **Interactive UI Dynamics**: Smooth scale-ups, subtle glow-lifts on card hover, page enter animations, custom scrollbars, and active state transitions.
- ⏳ **Skeleton Loaders**: Clean loading skeletons matching the card layout to prevent layout shifts during fetches.
- 🛡️ **Rate Limit Handling**: Dedicated warning state alerts the user with toast messages and a temporary banner when the API rate limit is exceeded.
- 🚀 **Local Dev Proxy**: Proxy routing via Vite configured to route `/api` requests automatically to the backend server running on `http://localhost:5001`.

---

## 🛠️ Stack & Dependencies

- **Vite & React** (v19)
- **Tailwind CSS v4 & DaisyUI** (for modern, utility-based glassmorphic styling)
- **React Router v7** (client-side routing)
- **Axios** (preconfigured HTTP requests)
- **lucide-react** (modern UI iconography)
- **react-hot-toast** (interactive action notifications)

---

## 📂 Key Components & Pages

- **Pages**:
  - `HomePage`: Lists all notes in a grid, with skeleton loading states and empty-state handling.
  - `CreatePage`: Clean form using custom glowing inputs to write a new note.
  - `NoteDetailPage`: Displays and allows edits or deletion of an existing note.
- **Components**:
  - `Navbar`: Frosted glass navigation with modern gradients.
  - `NoteCard`: Responsive glassmorphic container with micro-interactions.
  - `NotesNotFound`: Styled illustration indicating no notes found.
  - `RateLimitedUI`: Warm caution notice displayed upon triggering rate limiting.

---

## ⚙️ Development & Run

Inside the `frontEnd/` folder:

```bash
# Install dependencies
npm install

# Run Vite dev server (on http://localhost:5173)
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔗 Proxy Routing Configuration

The frontend Vite dev server is configured to proxy all `/api` requests to the backend server to avoid CORS issues:

```js
// vite.config.js
export default defineConfig({
  // ...
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
})
```
This means in development, API requests are made locally to `/api/notes` instead of needing absolute backend URL strings.
