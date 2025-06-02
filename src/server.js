import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Rotas
app.use('/categories', categoryRoutes);
app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('API de Finanças está rodando! ✅');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado no servidor!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
