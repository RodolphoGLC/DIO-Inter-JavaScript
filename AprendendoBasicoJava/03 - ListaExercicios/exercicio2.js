//Altura e peso (exigências da fórmula do IMC)

const peso = 90; //Peso em Kg
const altura = 1.80 //Altura em Metros

//Realizando a conta do IMC usando a formula

const IMC = peso / Math.pow(altura, 2);
//Math.pow(altura, 2) = (altura * altura)

//Comparação para saber onde o IMC da pessoa se enquadra

if (IMC >= 40)
{
    console.log('A pessoa está com o IMC igual à ' + IMC.toFixed(2) + ' o que indica Obsesidade Grave');
}
else if (30 < IMC && IMC < 40)
{
    console.log('A pessoa está com o IMC igual à ' + IMC.toFixed(2) + ' o que indica Obeso');
}
else if (25 < IMC && IMC < 30)
{
    console.log('A pessoa está com o IMC igual à ' + IMC.toFixed(2) + ' o que indica Acima do peso');
}
else if (18.5 < IMC && IMC < 25)
{
    console.log('A pessoa está com o IMC igual à ' + IMC.toFixed(2) + ' o que indica Peso normal');
}
else if (IMC <= 18.5)
{
    console.log('A pessoa está com o IMC igual à ' + IMC.toFixed(2) + ' o que indica Abaixo do peso');
}