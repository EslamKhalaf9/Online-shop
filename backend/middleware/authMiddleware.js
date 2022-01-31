import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  try {
    if (req.headers.auth.startsWith("Bearer")) {
      // console.log(req.headers.auth);
      const givenToken = req.headers.auth.split(" ")[1];

      //decode token
      const payload = jwt.decode(givenToken, process.env.TOKEN_SECRET);

      //fetch user from database
      const user = await User.findById(payload._id).select("-password");

      //save user in req.user
      req.user = user;
      next();
    }
    throw new Error("bad token");
  } catch (error) {
    res.status(401);

    if (error.message !== "bad token") error.message = "Unauthorized user";
    next(error);
  }
};

export default protect;
