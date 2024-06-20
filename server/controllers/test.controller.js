import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ messege: "Not authenticated" });
  jwt.verify(token, process.env.SECREAT_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ messege: "Token not valid" });
  });

  res.status(200).json({ messege: "You are authenticated" });
};
export const shouldBeAdmin = (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ messege: "Not authenticated" });
  jwt.verify(token, process.env.SECREAT_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ messege: "Token not valid" });
    if (!payload.isAdmin) {
      return res.status(403).json({ messege: "Not autherized" });
    }
  });

  res.status(200).json({ messege: "You are authenticated" });
};
