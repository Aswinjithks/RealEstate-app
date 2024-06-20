import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";

const router = express.Router();

router.get("/should-be-loggedin", shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

export default router;