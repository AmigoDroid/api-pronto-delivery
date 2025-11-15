// server.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import filialRoutes from './routes/filialRoutes.js';
// outros imports de rotas...

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/filiais', filialRoutes);
// app.use('/clientes', clienteRoutes); etc

// middleware auth simples
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET || 'secret';
export function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  const token = auth.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

const PORT = process.env.PORT || 3000;
(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB conectado');
    // use sequelize.sync() somente em dev; em produção use migrations
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
  } catch (err) {
    console.error('Erro ao conectar DB', err);
  }
})();
