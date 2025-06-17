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
          message: err.message,
        }));
        return res.status(422).json({ status: false, message: 'Validation Error', errors: validationError });
      }
      const find = await authModel.getByEmail(body.email);
      if (find) {
        return res.status(422).json({ status: false, message: 'Validation Error', errors: [{ field: 'email', message: 'Email already exists' }], });
      }
      const data = {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      }
      await authModel.register(data);
      return res.status(201).json({ status: true, message: 'Success' });
    } catch (error) {
      return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  },

  login: async (req, res) => {
    try {
      const body = req.body;
      const { error } = loginSchema.validate(body, { abortEarly: false });
      if (error) {
        const validationError = error.details.map((err) => ({
          field: err.path[0],
          message: err.message,
        }));
        return res.status(422).json({ status: false, message: 'Validation Error', errors: validationError });
      }
      const findEmail = await authModel.getByEmail(body.email);
      if (!findEmail) {
        return res.status(422).json({ status: false, message: 'Validation Error', errors: [{ field: 'email', message: 'Email not found' }] });
      }
      const password = await bcrypt.compare(body.password, findEmail.password);
      const psw = await bcrypt.hash(body.password, 10);
      console.log(psw)
      console.log(findEmail);
      if (!password) {
        return res.status(422).json({ status: false, message: 'Validation Error', errors: [{ field: 'password', message: 'Password not match' }] });
      }
      const user = await authModel.login(body.email);
      const token = jwt.sign({ id: user.id, email: user.email, name: user.name, role: user.role }, process.env.SECRET_KEY);
      return res.status(200).json({
        status: true, message: 'Success', data: {
          name: user.name,
          email: user.email,
          token: token
        }
      });
    } catch (error) {
      return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
  }

};

export default AuthController;
