//Notas dos alunos

const nota1 = 6;
const nota2 = 7;
const nota3 = 4;

//Calculo da média 

const media = (nota1 + nota2 + nota3) / 3;

//Comparação para sabe se o aluno está de recuperação

if (media >= 7)
{
    console.log('O aluno passou de semestre com a média ' + media.toFixed(2));
}
else if (5 <= media && media < 7)
{
    console.log('O aluno está de recuperação com a média ' + media.toFixed(2));
}
else 
{
    console.log('O aluno reprovou direto com a média ' + media.toFixed(2));
}
