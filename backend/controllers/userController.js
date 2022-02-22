import bcrypt from 'bcryptjs';
import _ from 'lodash';
import asyncHandler from 'express-async-handler';

import User, { validateLogin, validateSignup } from '../models/userModel.js';
import { generateJWT } from '../utils/jwtUtil.js';

export const postLogin = asyncHandler(async (req, res, next) => {
  //extract usefull data from req body
  const data = _.pick(req.body, ['email', 'password']);
  //validate data
  await validateLogin(data);
  //check if the email is exists in the db
  const user = await User.findOne({ email: data.email });

  if (user && (await user.matchPassword(data.password))) {
    //compare password by the hash password in the db
    // const result = await bcrypt.compare(data.password, user.password); // true if they match
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid username or password');
  }
});

//signup controller
export const postSignup = asyncHandler(async (req, res, next) => {
  const data = _.pick(req.body, ['email', 'name', 'password', 'idAdmin']);
  //validate Data
  await validateSignup(data);

  //find if the email already exists
  let user = await User.findOne({ email: data.email });

  if (user) {
    res.status(409);
    throw new Error('email already exists');
  }
  user = new User(data);
  await user.hashPassword();

  await user.save();

  res.json({
    _id: user._id,
    email: user.email,
    name: user.name,
    token: generateJWT(user._id),
  });
});

// GET api/user/profile  protected
export const getProfile = (req, res, next) => {
  res.json(req.user);
};
