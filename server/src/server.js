const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const routes = require('./routes'); 
require('dotenv').config();

const app = express(); // Cria uma instância do servidor Express

// Configuração de middleware
app.use(bodyParser.json()); 
app.use(cors()); 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração de rotas
app.use(routes); 
app.get('/', (req, res) =>{
    res.send("SERVIDOR ON!");
}); //

const port = process.env.SERVER_PORT || 5000;

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});