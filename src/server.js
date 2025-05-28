import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Rotas MVC
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Frontend estático
app.use(express.static('src/views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));