/*
Enunciado:
Crie um programa que peça um número e mostre uma mensagem 
dizendo se ele é positivo, negativo ou igual a zero.
*/
let numero = Number(prompt ("Digite um número"));

if (numero > 0) {
    alert("Este número é Positivo!")
}
else if (numero < 0) {
    alert("Este número é Negativo!")
} else {
    alert("O número é igual a zero")
}