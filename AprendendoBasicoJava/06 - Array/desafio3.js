//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const listaNomes = ['Rod', 'Vic', 'Dex', 'VC'];

for (let i = 0; i < listaNomes.length; i++) {
    const nome = listaNomes[i];

    if (nome.substr(0,1) === 'V'){
        console.log(nome);
    }
}