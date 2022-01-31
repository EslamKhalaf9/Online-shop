import Joi from "joi";
import bcrypt from "bcryptjs";
import _ from "lodash";
// const pick = require("lodash/pick");
import User, { validateLogin, validateSignup } from "../models/userModel.js";
import { generateJWT } from "../utils/jwtUtil.js";

export const postLogin = async (req, res, next) => {
  try {
    //extract usefull data from req body
    const data = _.pick(req.body, ["email", "password"]);
    //validate data
    await validateLogin(data);
    //check if the email is exists in the db
    const user = await User.findOne({ email: data.email });
    if (user) {
      //compare password by the hash password in the db
      const result = await bcrypt.compare(data.password, user.password); // true if they match
      if (result) {
        //send back the jwt
        res.json({
          _id: user._id,
          email: user.email,
          name: user.mail,
          token: generateJWT(user._id),
        });
      } else {
        //throw new error invalid user
        throw new Error("invalid information");
      }
    } else {
      //email doesn't exist
      throw new Error("invalid information");
    }
  } catch (error) {
    error.message = "invalid information";
    next(error);
  }
};

//signup controller
export const postSignup = async (req, res, next) => {
  try {
    const data = _.pick(req.body, ["email", "name", "password", "idAdmin"]);
    //validate Data
    await validateSignup(data);

    //find if the email already exists
    let user = await User.findOne({ email: data.email });

    if (user) {
      throw new Error("email already exists");
    }
    user = new User(data);
    await user.hashPassword();

    await user.save();
    const token = generateJWT(user._id);

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

// GET api/user/profile  protected
export const getProfile = (req, res, next) => {
  res.json(req.user);
};
