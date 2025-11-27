require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/infrastructure/database/db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./src/interface/routes/authRoutes");
app.use("/api/auth", authRoutes);

const projectRoutes = require("./src/interface/routes/projectRoutes");
app.use("/api/projects", projectRoutes);


// Connect Database
connectDB();

// Basic test route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Server Listener
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
