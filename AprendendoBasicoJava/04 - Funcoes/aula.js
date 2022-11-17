//Funções - pequeno trecho do codigo que podemos usar quando quisermos

//Exemplo de função - básica

function teste()
{
    console.log('Função teste');
}

//Para chamar a função

teste();

// ----------------------------------------------------------------------------------------

//Outro exemplo - função que paga e armazena uma variável nela

function digaMeuNome(nome) //a variável nome está sendo um paramentro
{
    console.log('Meu nome é ' + nome);
}

digaMeuNome('Rodolpho'); //O paramentro é passado aqui
digaMeuNome('Yoshi');

// ----------------------------------------------------------------------------------------

//Função do quadrado

function quadrado(valor)
{
    return valor * valor;
}

quadrado(10); //Pasando apenas um parametro
console.log(quadrado(10) + quadrado(5)); //Passa tanto o parametro quanto faz uma conta nele

// ----------------------------------------------------------------------------------------

function incrementarJuros(valor, percentual) {
    const valorAcrescimo = (percentual / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 25));
console.log(incrementarJuros(100, 35));

/*Função Main - dentro da função ele e executado, e depois quando chama ela ele é exposto
                Criamos funções auxiliares antes da main e podemos a usar lá
*/
function main()
{
    console.log('Programa Principal')
}

main();