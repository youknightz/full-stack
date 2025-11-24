const express = require("express");
const app = express();
const port = 3000;


// Variável com os dados produtos 
const produtos = [
    {id: 1, nome: 'Produto A', preco: 100},
    {id: 1, nome: 'Produto B', preco: 100},
    {id: 1, nome: 'Produto C', preco: 100},
];


// Criar função
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor Node.js');
});



// Rota produtos
app.get ('/produtos', () => {
    resizeBy.sen(produtos);
});

// Rota home
app.get('/home', (req, res) => {
    console.log("Olá: ", __dirname);
    res.sendFile(__dirname + '/public/home.html');
});


// Executnado os servidores 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});