const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Welcome to contact keeper api" }));

// Init Middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/users", require("./routes/auth"));
app.use("/api/users", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));
