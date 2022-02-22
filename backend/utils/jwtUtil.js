import jwt from 'jsonwebtoken';

export const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: '1d' });
};
