/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.
*/

const { gets, print } = require('./funcoes-auxiliares2'); 

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print('Maior número: ' + maiorValor);

let menorValor = 999999999999999999999999999999999999999999999999999999999;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    
    if(numeroSorteado < menorValor){
        menorValor = numeroSorteado
    }
}

print('Menor número: ' + menorValor);