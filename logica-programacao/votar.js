/*
Enunciado:
Crie um programa que peça a idade de uma pessoa e mostre uma mensagem dizendo se ela pode votar ou ainda não pode votar.
*/

let idade = Number(prompt ("Digite sua idaade"));

if (idade >= 18) {
    alert("você ja pode votar!");
}
 else if(idade <=18)
    alert("Você não pode votar!!");
