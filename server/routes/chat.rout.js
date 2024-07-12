import express from "express"
import { verifyToken } from "../middleware/veryfyToken.js"
import { addChat, getChat, getChats, readChat } from "../controllers/chat.controller.js"

const router = express.Router()


router.get("/",verifyToken,getChats)
router.get("/:id",verifyToken,getChat)
router.get("/",verifyToken,addChat)
router.get("/read/:id",verifyToken,readChat)




export default router