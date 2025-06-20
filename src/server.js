import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import { logger } from './middlewares/logger.js';          
import { errorHandler } from './middlewares/errorsHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(logger);

// Rotas
app.use('/categories', categoryRoutes);
app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('API de Finanças está rodando! ✅');
});

app.use(errorHandler); // tratar erros HAHAHAHAHA

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
