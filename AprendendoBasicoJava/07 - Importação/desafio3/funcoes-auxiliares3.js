
const entrada = [5, 1, 3, 9, 10, 12];
let i = 0;

function gets(){
    const aVerificar = entrada[i];
    i++;

    return aVerificar;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print }; 