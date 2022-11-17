//Váriaveis necessárias
const precoCombustivel = 5.15; //1L = $5,15
const gastoMedio = 10; //Km/L
let distanciaKm = 130; //Distancia da viagem em Km (pode ser alterada a fim de ter outras viagens)

//Contas necessárias
let litrosGasto = distanciaKm / gastoMedio;
let valorTotal = litrosGasto * precoCombustivel;

//Imprimir o valor gasto com 2 casas decimais (.toFixed(2)) em uma string
console.log('O valor gasto pelo carro foi de ' + valorTotal.toFixed(2));