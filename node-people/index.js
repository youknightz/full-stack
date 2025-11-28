const express = require("express");
const app = express();
const PORT = 3000; // executar na porta 3000

    //Indicar para express ler body com json
    app.use(express.json());



// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "70" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];
//adicionando função para times
 function buscarTimePorId(id) {
        return times.findIndex((times) => times.id == id);
    };

function buscarTimePorId(id) {
    return times.filter((times) => times.id == id);
};

//Adicionando a função get 
app.get("/times", (req, res) => {
    res.send(times);
});

app.get("/times/:id", (req, res) => {
    let.index = req.params.id;
    res.json(buscarTimePorId(index));
});

app.post("/times", (req, res) => {
    times.push(req.body);
    res.status(201).send('Time cadastrado com susseso!');

});

    app.delete("/times/:id", (req, res) => {
      let id = req.params.id;
      let index = buscarTimePorId(id);
      if (index === -1) {
        return res.status(404).send(`Time com id ${id} não existe`)
      }
        
         times.splice(index, 1);
        res.send(`Time com id ${req.params.id} excluido com sucesso!`);
      
     
    });


// Criando Funções Auxiliares
// Retornar o objeto por Id
function buscarNomePorId(id) {
  return nomes.filter((nome) => nome.id == id)
}
    function buscarIdNomes(id) {
        return nomes.findIndex((nome) => nome.id == id);
    }
// Rota teste
app.get("/teste", (req, res) => {
  res.send("API nodePeople está funcionando!");
});

// Buscando nomes (listaNomes)
app.get("/listaNomes", (req, res) => {
  res.send(nomes);
});

// Buscando por ID
app.get("/listaNomes/:id", (req, res) => {
  let index = req.params.id;
  res.json(buscarNomePorId(index))
});

        //Criando Post para cadastrar
    app.post("/listaNomes", (req, res) => {
        nomes.push(req.body);
        res.status(201).send('Nomes cadastrado com sucesso');
    });


    app.delete("/listaNomes/:id", (req, res) => {
        let index = buscarIdNomes(req.params.id);
        nomes.splice(index, 1);
        res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
    });


app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});