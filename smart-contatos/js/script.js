const form = document.querySelector("form");
   

form.addEventListener("submit", function(event) {
    console.log("bom dia")
     event.preventDefault();
})


// Validação ddo formulário
/*

    se o input for vazio, adicionar uma mensagem

*/
if (inputNome.value == "") {
    alert("AO MN, vai cadastrar o vazio?");
    return false;
}


const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
// imputEmail
// imputTel

function btnCadastrar(event) {
    event.preventDefault()
    console.log("Nome", inputNome.value)
    console.log("Email", inputEmail.value)
    console.log("Telefone", inputTelefone.value)
}