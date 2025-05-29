import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import carroRoutes from './routes/carroRoutes.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/usuarios', usuarioRoutes)
app.use('/carros', carroRoutes)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

