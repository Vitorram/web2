const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});