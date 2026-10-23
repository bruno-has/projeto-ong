require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

const projetosRoute = require('./routes/projetosRoute');
app.use('/projetos', projetosRoute);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor iniciado");
})

