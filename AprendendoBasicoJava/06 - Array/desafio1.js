//1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 5;

console.log('A tabuada do ' + numero + ' é');

for (let i = 1; i <= 10; i++) {
    console.log(numero + ' * ' + i + ' = ' + numero * i);
}