
//2 jeitos de imprimir na main

const funcao = require('./funcoes-auxiliares'); //Importa as funções auxiliares

console.log(funcao.gets()); //Imprime o gets()

const { gets, print } = require('./funcoes-auxiliares'); //Importa as funções auxiliares

print(gets());//Imprime o gets()



