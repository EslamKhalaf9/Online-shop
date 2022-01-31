import jwt from "jsonwebtoken";

export const generateJWT = (id) => {
  return jwt.sign({ _id: id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
};
