//Verifica se o número e par usando if

const numero = 10;
const eNumeroPar = numero % 2; //Calcula o resto da divisão

if(eNumeroPar == 0) //Compara o valor e aplica nas condições
{
    console.log('O número ' + numero + ' é par');
}
else
{
    console.log('O número ' + numero + ' não é par');
}

// ------------------------------------------------------------------------

//Verifica se o número e par usando if

const numero1 = 10;
const eNumeroPar1 = (numero % 2) === 0; //Faz o resto da divisão e compara a igualdade (===)

/*Explicação dos =
    = -> Atribuição
    == -> Igualdade onde não importa o tipo da variavel -> Converção implicita
    === -> Igualdade onde importa o tipo da variavel
*/

if (eNumeroPar1) //Verifica se o eNumeroPar é verdadeiro
{
    console.log('Par');
}
else if (!eNumeroPar1) //Verifica se o eNumeroPar é falso - Pode subistituir por Else
{
    console.log('Impar');
}