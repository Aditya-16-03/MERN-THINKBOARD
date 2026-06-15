const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db.js");
const notesRoutes = require("./routes/notesRoutes.js");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use("/api/notes",notesRoutes);


app.listen(5001,()=>{
    console.log("server is running on port 5001");
});