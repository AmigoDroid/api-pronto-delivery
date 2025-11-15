// controllers/userController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const jwtSecret = process.env.JWT_SECRET || 'secret';

export async function register(req, res) {
  try {
    const { nome, email, senha, filialId } = req.body;
    const hash = await bcrypt.hash(senha, 10);
    const user = await User.create({ nome, email, senha: hash, filialId });
    res.json({ id: user.id, nome: user.nome, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });
    const ok = await bcrypt.compare(senha, user.senha);
    if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });
    const token = jwt.sign({ id: user.id, role: user.role, filialId: user.filialId }, jwtSecret, { expiresIn: '12h' });
    res.json({ token, user: { id: user.id, nome: user.nome, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
