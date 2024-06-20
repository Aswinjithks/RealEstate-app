import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ messege: "Not authenticated" });
  jwt.verify(token, process.env.SECREAT_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ messege: "Token not valid" });
    req.userId = payload.id;
    next();
  });
};
