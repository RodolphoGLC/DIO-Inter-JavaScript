function media(nota1, nota2, nota3){
    return ((nota1 + nota2 + nota3) / 3);
}

function comparativoMedia(mediacomp){
    if (mediacomp >= 7)
    {
        return 'O aluno passou de semestre com a média ';
    }
    else if (5 <= mediacomp && mediacomp < 7)
    {
        return 'O aluno está de recuperação com a média ';
    }
    else 
    {
        return 'O aluno reprovou direto com a média ';
    }
}

(function main(){
    const nota1 = 6;
    const nota2 = 7;
    const nota3 = 4;

    const mediacomp = media(nota1, nota2, nota3);

    console.log(comparativoMedia(mediacomp));
})();

