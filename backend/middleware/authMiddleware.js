import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  try {
    if (req.headers.authorization.startsWith('Bearer')) {
      const givenToken = req.headers.authorization.split(' ')[1];
      console.log(givenToken);
      //decode token
      const payload = jwt.decode(givenToken, process.env.TOKEN_SECRET);

      //fetch user from database
      const user = await User.findById(payload.id).select('-password');

      //save user in req.user
      req.user = user;
      next();
    } else throw new Error('bad token');
  } catch (error) {
    res.status(401);

    if (error.message !== 'bad token') error.message = 'Unauthorized user';
    next(error);
  }
};

export default protect;
