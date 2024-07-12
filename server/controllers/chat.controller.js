import prisma from "../lib/prisma.js"

export const getChats = async (req, res) => {
    const tokenUserId = req.userId
    try {
        const chats = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            }
        })
        res.status(200).json(chats)
    } catch (error) {

    }

}
export const getChat = (req, res) => {

}
export const addChat = (req, res) => {

}
export const readChat = (req, res) => {

} 