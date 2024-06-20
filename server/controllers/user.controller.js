import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getAllusers = async (req, res) => {
  console.log("it works");
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ messege: "Sucess!", users });
  } catch (error) {
    res.status(500).json({ messege: "Faild to get users!" });
  }
};
export const getuser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    res.status(200).json({ messege: "Sucess", user });
  } catch (error) {
    res.status(500).json({ messege: "Faild to get user!" });
  }
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }
  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });
    const { password: userPassword, ...rest } = updatedUser;
    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update users!" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }
  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "User deleted sucessfully!" });
  } catch (error) {
    res.status(500).json({ messege: "Faild to delete user" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;
  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });
    if (savedPost) {
      await prisma.savedPost.delete({
        where: {
          id: savedPost.id,
        },
      });
      return res.status(200).json({ message: "Post removed from saved list" });
    } else {
      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      return res.status(200).json({ message: "Post saved sucessfully!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Unable to save post" });
  }
};

export const profilePosts = async (req, res) => {
  //console.log(req);
  const tokenUserId = req.params.userId;
  try {
    const profilePosts = await prisma.post.findMany({
      where: { userId: tokenUserId },
    });
    const posts = await prisma.savedPost.findMany({
      where: { userId: tokenUserId },
      include: {
        post: true,
      },
    });
    //console.log("profilePosts", profilePosts);
    console.log("posts", posts);
    const savedPosts = posts.map((item) => item.post);
    res.status(200).json({ profilePosts, savedPosts });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Unable to get posts" });
  }
};
