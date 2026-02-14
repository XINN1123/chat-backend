import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    secure: true,           // REQUIRED for cross-site cookies (Vercel ↔ Render)
    sameSite: "none",       // REQUIRED for cross-site cookies
  });

  return token;
};
