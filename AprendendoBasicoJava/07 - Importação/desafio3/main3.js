/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
*/

const { gets, print } = require('./funcoes-auxiliares3'); 

const ePar = [];

for (let i = 0; i < 6; i++) {
    const numeros = gets();
    ePar.push(numeros);
}

print(ePar);

let pares = [];

for (let i = 0; i < ePar.length; i++) {
    const verificarPar = ePar[i];
    
    if(verificarPar % 2 === 0){
        pares.push(verificarPar);
    }
}

print('Números Pares: ' + pares);