// Importando o express
const express = require('express');

// Importando nossas rotas
const routes = require('./routes');


const app = express();
require('./config/dbConfig'); // importando o connection


// Recurso para informar ao express que vamos fazer a comunicação com json
app.use(express.json());
// Recurso para informar as rotas
app.use(routes);
// Colocando um valor para porta
app.listen(3333);