//Uma sala contém 5 alunos e cada um receber´1 um número de 1 - 100
//Faça um programa que receba os números e diga qual o maior

const { gets, print } = require('./funcoes-auxiliaresp'); 

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

print(maiorValor);





