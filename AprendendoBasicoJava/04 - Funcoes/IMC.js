//Resolução

//1º Declarar as funções 

function IMC(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc){
    if (imc >= 40) {
        return 'Obsesidade Grave';
    }
    else if (30 < imc && imc < 40) {
        return 'Obeso';
    }
    else if (25 < imc && imc < 30) {
        return 'Acima do peso';
    }
    else if (18.5 < imc && imc < 25) {
        return 'Peso normal';
    }
    else if (imc <= 18.5) {
        return 'Abaixo do peso';
    }
}

//2º Criar a Main usando as funções auxiliares

function main(){
    const peso = 90; 
    const altura = 1.80;

    const imc = IMC(peso, altura); 
    console.log(classificarIMC(imc));
}

main();

//As funções podem ser manipuladas

main = function(){
    console.log('1');
}

main();

//A função pode ser imediatamente invocada (não precisa do main(); no final do código)
//  Faz com que não de mais para chamar ela
//      Isola o código e um escopo (usado muito na programação web)

(function main(){
    const peso = 90; 
    const altura = 1.80;

    const imc = IMC(peso, altura); 
    console.log(classificarIMC(imc));
})();