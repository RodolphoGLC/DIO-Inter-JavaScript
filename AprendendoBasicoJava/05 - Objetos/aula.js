//Alguns objetos

console.log('Objeto + método') 

//Objeto e um cara que agrupa valores e funciona atraves de chave valor

//Objeto literal, coleção de dados que podem ser acessados

const rodolpho = {
    nome: 'Rodolpho GL Coutinho',
    idade: 20
};

console.log(rodolpho.nome);
console.log(rodolpho.idade);
console.log(rodolpho); //Expõe a coleção de valores

//Além de acessar, podemos adicionar mais coisas para o objeto, remover e alterar

rodolpho.altura = 1.80; //Adiciona a altura
delete rodolpho.idade; //Deleta a idade
rodolpho.nome = 'Rodolpho'; //Modifica a altura

console.log(rodolpho); 

// ------------------------------------------------------------------------------------------

//No java da para adicionar funções(metodos) dentro de um objeto. E vc pode usar os valores

const yoshi = {
    nome: 'Yoshi',
    idade: 1.5,

    descrever: function () {
        this
        console.log('Meu nome é ' + this.nome + ' e a minha idade é ' + this.idade);
    }
};

yoshi.descrever();

//Além disso, você pode escrever uma variavel e pedir alguma coisa em especifico do objeto

const atributo = 'idade';


console.log(yoshi[atributo]);
                            //Fazem a mesma coisa
console.log(yoshi['idade']);

//Tambem podemos usar isso para alterar o valor 

yoshi['nome'] = 'Yoshi Relbolt';

yoshi.descrever();

// --------------------------------------------------------------------------------------------

//Classe para construir um modelo para a pessoa
//  Define como é a pessoa para a instanciar

class Pessoa{
    nome;
    idade;

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.');
    }
}

//Classe: descreve como tem que ser o objeto
//Instância: descreve um objeto específico (ocorrência de um objeto)

//Para instanciar uma nova pessoa

const rodolpho3 = new Pessoa();
rodolpho3.nome = 'Rodolpho GL Coutinho';
rodolpho3.idade = 20;

const yoshi3 = new Pessoa();
yoshi3.nome = 'Yoshi';
yoshi3.idade = 2;

rodolpho3.descrever();
yoshi3.descrever();

//Classe com um construtor

class PessoaConstrutor{
    nome;
    idade;
    
    //Faz com que caso uma pessoa seja instanciada ela precise ter o que tem no construtor
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade; //O construtor pode preparar atributos
    }

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.');
    }
}

const rodolpho2 = new PessoaConstrutor('Rodolpho', 20);
const yoshi2 = new PessoaConstrutor('Yoshi', 2);

console.log(rodolpho2);
console.log(yoshi2);
rodolpho2.descrever();
yoshi2.descrever();

// --------------------------------------------------------------------------------------------------------

//Comparativo Idade

class PessoaIdade{
    nome;
    idade;
    
    //Faz com que caso uma pessoa seja instanciada ela precise ter o que tem no construtor
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade; //O construtor pode preparar atributos
    }

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.');
    }
}

function compararPessoas (p1, p2){
    if (p1.idade > p2.idade){
        console.log(p1.nome + ' é mais velho(a) que ' + p2.nome);
    }
    else if (p2.idade > p1.idade){
        console.log(p2.nome + ' é mais velho(a) que ' + p1.nome);
    }
    else {
        console.log('As pessoas possuem a mesma idade.');
    }
}

const rodolpho5 = new PessoaIdade('Rodolpho', 20);
const yoshi5 = new PessoaIdade('Yoshi', 2);

compararPessoas(rodolpho5, yoshi5);


















