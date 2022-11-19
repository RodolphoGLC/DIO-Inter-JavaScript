/*
1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
*/

const { gets, print } = require('./funcoes-auxiliares1'); 

let tabuada = 0;

for (let i = 0; i <= 10; i++) {
    const valor = gets();

    tabuada = valor * i;

    print(tabuada);
}
