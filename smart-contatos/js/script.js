const form = document.querySelector("form");
const lista = document.querySelector(".lista");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
const listaMsg = document.querySelector(".lista-msg")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputNome.value == "" || inputEmail.value == "" || inputTelefone.value == "") {
    alert("Digite seus dados.");
    return false;
}
    console.log("Nome", inputNome.value)
    console.log("Email", inputEmail.value)
    console.log("Telefone", inputTelefone.value)
})

//Condição, para tirar a li > .lista-msg 
// se (listaMsg === true) 
if (listaMsg === true) {
    listaMsg.remove();
}

// Criar LI
const li = document.createElement("li");

    li.innerHTML = `
        <span class="contato-nome">${inputNome.value}</span>
         <span class="contato-email">${inputEmail.value}</span>
          <span class="contato-telefone">${inputTelefone.value}</span>
    `;

    console.log(li);


    lista.appendChild(li)

    form.reset();
        

