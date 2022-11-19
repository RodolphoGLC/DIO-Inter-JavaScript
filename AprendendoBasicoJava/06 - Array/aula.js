
//Lista - Armazena dados podendo ser de tipos diferentes, o tamanho será dinamico
//  representado por []
// {} -> bloco de codigo ou objeto literal
// [] -> lista

const alunos = ['Rodolpho', 'Arthur', 'Alexandre']; //3 strings dentro de uma lista
//      adiciona 3 alunos em uma variavel

console.log(alunos); //Ver a lista toda

console.log(alunos[0]); //Ver só o primeiro aluno
console.log(alunos[1]); //Ver só o segundo aluno
console.log(alunos[2]); //Ver só o terceiro aluno

//Para adicionar e retirar membros da lista

alunos.push('Renata'); //Push adiciona na lista - no final
alunos[4] = 'Yoshi'; //Adiciona em alguma posição em específica, mas tb pode substituir o daquela posição
console.log(alunos);

alunos.pop(); //Pop remove o ultimo membro da lista e trás para você 
console.log(alunos);
console.log(alunos.pop()); //Escreve o que foi removido
console.log(alunos);

alunos.shift(); //Shift remove o primeiro membro da lista e trás para você 
console.log(alunos);
console.log(alunos.shift()); //Escreve o que foi removido
console.log(alunos);

// ------------------------------------------------------------------------------------------------------

//Realizando uma operação com a lista com o for

const nota = [];

nota.push(5);
nota.push(7);
nota.push(9);
nota.push(5);
nota.push(8);

console.log(nota.length); //Lenght mostra quantos membros tem na lista

//Percorre uma quantidade específica de vezes

let soma = 0;

for (let i = 0; i < nota.length; i++) {
    const notas = nota[i];
    soma = soma + notas;
}

const media = soma / nota.length;
console.log(media.toFixed(1));

// --------------------------------------------------------------------------------------------------------










