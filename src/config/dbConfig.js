// Arquivo de configuração do banco de dados

// Vamos instalar uma dependência na pasta src chamada de "mongoose" que é uma biblioteca que cria uma conexão com o mongoDB e a estrutura de aplicativo web express
const mongoose = require('mongoose');


// mongodb+srv://acessobanco:<password>@clustercursocrud.lipff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const dbURL = 'mongodb+srv://acessobanco:acessobanco@clustercursocrud.lipff.mongodb.net/annotations?retryWrites=true&w=majority';


// Bloco de conexão com o banco, o objeto criado entre {} são parâmetros para escapar de erros...
const connection = mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Dessa maneira conseguimos usar a variável connection em todo nosso programa.
module.exports = connection;