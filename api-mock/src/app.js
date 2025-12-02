import express from "express";
const app = express();

app.use(express.json());

function buscarEnderecoPorId(id) {
    return cadastros.filter((cadastros) => cadastros.id == id);
};

function buscarIdEnderecos(id) {
    return cadastros.findIndex((cadastros) => cadastros.id == id);
}

app.get("/", (req, res)  => {
    res.send("Olá Node js seu lindo");
});

app.get("/cadastros", (req, res) => {
    let index = req
    res.send(cadastros); 

    res.json(buscarEnderecoPorId(index));
});

app.post("/cadastros", (req, res) => {
    res.status(201).send('Endereço cadastrado com sucesso!');
    cadastros.push(req.body);
});

app.delete("/cadastros/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdEnderecos(req.params.id);
    cadastros.splice(index, 1);
      if (index === -1)
    return res.status(404).send(`Nenhum endereço com id ${id} foi encontrado`);
    res.send(`Endereço com id ${req.params.id} foi excluido com sucesso!`);
});






export default app;
const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];