//Preço original e a condição de pagamento

const precoOriginal = 15;
const pagamento = 'A vista no Débito';
//'A vista no Dinheiro/Pix' - 'Em duas vezes' - 'Acima de duas vezes'

if (pagamento === 'A vista no Débito')
{
    console.log('O valor a ser pago será ' + (precoOriginal - (precoOriginal * 0.10)).toFixed(2)); 
}
else if (pagamento === 'A vista no Dinheiro/Pix')
{
    console.log('O valor a ser pago será ' + (precoOriginal - (precoOriginal * 0.15)).toFixed(2)); 
}
else if (pagamento === 'Em duas vezes')
{
    console.log('O valor a ser pago será ' + precoOriginal.toFixed(2));
}
else if (pagamento === 'Acima de duas vezes')
{
    console.log('O valor a ser pago será ' + (precoOriginal + (precoOriginal * 0.10)).toFixed(2));
}
else
{
    console.log('O método de pagamento não condiz com os estruturados acima');
}