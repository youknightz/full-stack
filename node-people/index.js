const express = require("express");
const app = express();
const PORT = 4000; // Executar na porta 3000

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
]

//Buscando nomes (listaNomes)
app.get("/listaNomes", (req, res) => {
    console.log(nomes);
    res.send(nomes);
});


// Rota teste
app.get("/teste", (req, res) => {
    res.send("API nodePeople está funcionando!");
});


app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço https:localhost:${PORT}`);
});
