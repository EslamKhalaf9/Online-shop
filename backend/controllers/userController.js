import bcrypt from 'bcryptjs';
import _ from 'lodash';
import asyncHandler from 'express-async-handler';

import User, { validateLogin, validateSignup } from '../models/userModel.js';
import { generateJWT } from '../utils/jwtUtil.js';

//@desc POST login user
//@route POST api/user/login
//@access puplic
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

//@desc POST register user
//@route POST api/user/signup
//@access puplic
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
  //@TODO use userSchema.pre('save', callback) hash password pre saving
  await user.hashPassword();

  await user.save();

  res.json({
    _id: user._id,
    email: user.email,
    name: user.name,
    token: generateJWT(user._id),
  });
});

//@desc PUT update user
//@route PUT /api/user/update
//@access private
export const putUpdate = asyncHandler(async (req, res, next) => {
  const data = _.pick(req.body, ['email', 'name', 'password', 'idAdmin']);

  //validate Data
  // await validateSignup(data);

  //find if the email already exists

  let user = await User.findById(req.user._id);

  if (user) {
    user.email = data.email || user.email;
    user.name = data.name || user.name;
    user.isAdmin = data.isAdmin || user.isAdmin;

    if (data.password) {
      user.password = data.password;
      await user.hashPassword();
    }

    await user.save();
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error('no such user');
  }
});

//@desc GET user profile
//@route GET api/user/profile
//@access private
export const getProfile = (req, res, next) => {
  res.json({
    _id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    isAdmin: req.user.isAdmin,
  });
};
