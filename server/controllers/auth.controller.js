import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import Jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User created sucessfully" });
  } catch (error) {
    
    res.status(500).json({ message: "Faild to create user" });
  }
};
export const login = async (req, res) => {
  const { username } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return res.status(401).json({ messege: "Invalid credentials" });
  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  //res.setHeader("Set-cookie", "test=" + "myvalue").json({ message: "sucess" });

  const token = Jwt.sign(
    { id: user.id, isAdmin: true },
    process.env.SECREAT_KEY,
    {
      expiresIn: 1000 * 60 * 60 * 24 * 7,
    }
  );
  console.log("token", token);

  const { password, ...userInfo } = user;

  res
    .cookie("token", token, {
      httpOnly: true,
      //secure:true
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .status(200)
    .json({ message: "Login Sucess", user: userInfo });

  try {
  } catch (error) {
    res.status(500).json({ message: "Faild to login" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ messege: "Logout sucess!" });
};
