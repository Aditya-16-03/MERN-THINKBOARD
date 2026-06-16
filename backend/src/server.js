const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const notesRoutes = require("./routes/notesRoutes.js");
const ratelimit = require("./config/upstash.js");

dotenv.config();
const app = express();
connectDB();

// CORS — allow requests from the Vite dev server and any production origin
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json()); // this middleware is used to parse incoming JSON requests and make the data available in req.body

// Rate limiting middleware
app.use(async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit(req.ip);
        if (!success) {
            return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
        }
        next();
    } catch (error) {
        console.error("Rate limit error:", error);
        next();
    }
});
//this middleware is used to log the HTTP method and URL of each incoming request. It helps in monitoring and debugging the application by providing information about the requests being made to the server.
app.use((req, res, next) => {
    console.log(`${req.method} is triggered at ${req.url}`);
    next();
});
app.use("/api/notes",notesRoutes);



app.listen(5001,()=>{
    console.log("server is running on port 5001");
});