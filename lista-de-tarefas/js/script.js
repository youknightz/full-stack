// Função em JavaScript
function adiocionar() {
    // Vairiáveis
    let tarefa = document.getElementById("tarefas...");
    let lista = document.getElementById("lista");

    let item = document.createElement("li");
    item.textContent = tarefa.value;

    Lista.appendChild(item);

        tarefa.value = "";
}