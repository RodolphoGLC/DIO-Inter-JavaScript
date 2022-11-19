//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const listaNotas = [2, 7, 3, 8, 9, 4];
var nota = 0;

for (let index = 0; index < listaNotas.length; index++) {
    const notas = listaNotas[index];

    if(notas > nota){
        nota = notas;
    }
}

console.log(nota);