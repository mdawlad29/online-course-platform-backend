import express from "express";
import bannerRouter from "../domains/banner/routes.js";

const apiRouter = express.Router();

apiRouter.get("/test", (req, res) => {
  res.send("App is working...");
});

apiRouter.use("/banner", bannerRouter);

export default apiRouter;
