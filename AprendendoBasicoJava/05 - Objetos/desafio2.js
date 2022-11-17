/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa{
    nome;
    pesoKg;
    alturaM;

    constructor(nome, pesoKg, alturaM){
        this.nome = nome;
        this.pesoKg = pesoKg;
        this.alturaM = alturaM;
    }

    IMC(){
        return this.pesoKg / Math.pow(this.alturaM, 2) 
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose);
console.log(jose.IMC());