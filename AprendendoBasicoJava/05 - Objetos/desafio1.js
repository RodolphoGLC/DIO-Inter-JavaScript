/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularViagem(distancaKm, precoCombustivel){
        return (distancaKm * this.gastoPorKm * precoCombustivel).toFixed(2);
    }
}

const uno = new Carro('Fiat', 'Prato', (1/11).toFixed(2));

console.log(uno);
console.log(uno.calcularViagem(70, 6.45));