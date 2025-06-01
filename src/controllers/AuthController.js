import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import dotenv from 'dotenv';
dotenv.config();

const AuthController = {
  // Register
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'wajib' });
      }
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: 'sudah ada' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword
        }
      });

      res.status(201).json({ message: 'Dadi COk', user: { id: newUser.id, email: newUser.email } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Gagal Dancok ' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: 'Email tidak ada' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Salah' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(200).json({
        message: 'Berhasil',
        token
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Salah' });
    }
  }

};

export default AuthController;
