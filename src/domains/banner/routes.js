import express from "express";
import {
  createBanner,
  deleteBanner,
  getAllBanner,
  getBanner,
  updateBanner,
} from "./controller.js";

const bannerRouter = express.Router();

bannerRouter.get("/", getAllBanner);
bannerRouter.get("/:id", getBanner);
bannerRouter.post("/", createBanner);
bannerRouter.put("/:id", updateBanner);
bannerRouter.delete("/:id", deleteBanner);

export default bannerRouter;
