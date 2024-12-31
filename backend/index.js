import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";

dotenv.config(); 

const app = express();

// Middleware
app.use(cors({
  origin: "*", 
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],  
  credentials: false,
}));
app.use(express.json());

// Root route for health check
app.get("/", (req, res) => {
  res.json({
    message: "Deployment working perfectly, yaaayyyy",
  });
});

// API routes
app.use("/api/v1", rootRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
