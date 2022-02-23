import mongoose from 'mongoose';
import Joi from 'joi';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // true if they match
};

userSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
  // console.log(this.password);
};

const User = mongoose.model('User', userSchema);

export const validateLogin = async (user) => {
  const loginDataScema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(5).max(20).trim().required(),
  });

  return loginDataScema.validateAsync(user);
};
export const validateSignup = async (user) => {
  const loginDataScema = Joi.object({
    name: Joi.string().alphanum().required().min(2).max(50),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).max(20).trim().required(),
    isAdmin: Joi.boolean(),
  });

  return loginDataScema.validateAsync(user);
};

export default User;
