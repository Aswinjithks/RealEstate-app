import express from "express";
import {
  deleteUser,
  getAllusers,
  getuser,
  updateUser,
  savePost,
  profilePosts
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/veryfyToken.js";

const router = express.Router();

router.get("/", getAllusers);
//router.get("/:id", verifyToken, getuser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/savepost", verifyToken, savePost);
router.get("/profileposts",verifyToken,profilePosts)

export default router;
