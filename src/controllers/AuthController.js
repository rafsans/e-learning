import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authModel from '../models/authModel.js';
import { registerSchema, loginSchema } from '../validation/authValidation.js';
import dotenv from 'dotenv';
dotenv.config();

const AuthController = {
  register: async (req, res) => {
    try {
      const body = req.body;
      const { error } = registerSchema.validate(body, { abortEarly: false });
      if (error) {
        const validationError = error.details.map((err) => ({
          field: err.path[0],
          message: err.message.replace(/"/g, ''),
        }));
        return res.status(422).json({ status: false, message: 'Validation Error', errors: validationError });
      }
      await authModel.register(body);
      return res.status(201).json({ status: true, message: 'Success' });
    } catch (error) {
      return res.status(500).json({ status: false, message: 'Server Error' });
    }
  },

  login: async (req, res) => {
    try {
      const body = req.body;
      const { error } = loginSchema.validate(body, { abortEarly: false });
      if (error) {
        const validationError = error.details.map((err) => ({
          field: err.path[0],
          message: err.message.replace(/"/g, ''),
        }));
        return res.status(422).json({ status: false, message: 'Validation Error', errors: validationError });
      }

      const user = await authModel.login(body.email);
      if (!user) {
        return res.status(401).json({ status: false, message: 'Unauthorized' });
      }
      const token = jwt.sign(user, process.env.SECRET_KEY);
      return res.status(200).json({
        status: true, message: 'Success', data: {
          name: user.name,
          email: user.email,
          token: token
        }
      });
    } catch (error) {
      return res.status(500).json({ status: false, message: error.message });
    }
  }

};

export default AuthController;
