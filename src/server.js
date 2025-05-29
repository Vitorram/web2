import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes.js';
import carroRoutes from './routes/carroRoutes.js';

const app = express();
const port = 3000
// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);
app.use('/carros', carroRoutes);

// Inicializa servidor
const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
