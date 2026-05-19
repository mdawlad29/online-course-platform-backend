import dotenv from "dotenv";
import express from "express";
import apiRouter from "./routes/index.js";
import { errorHandler, successHandler } from "./utils/responseHandler.js";

dotenv.config({});

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return successHandler(res, {
    data: null,
    statusCode: 200,
    message: "Your application is running..",
  });
});

app.use("/api/v1", apiRouter);

// API not found
app.use((req, res) => {
  return errorHandler(res, { message: "Route not found", statusCode: 404 });
});

// Global error handler
app.use((err, req, res, next) => {
  return errorHandler(res, {
    statusCode: 500,
    message: err.message || "Internal server error!",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
