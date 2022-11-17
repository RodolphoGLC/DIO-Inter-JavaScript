
function calculoCorreto(precoOriginal, pagamento){
    if (pagamento === 'A vista no Débito')
    {
        return (precoOriginal - (precoOriginal * 0.10)).toFixed(2); 
    }
    else if (pagamento === 'A vista no Dinheiro/Pix')
    {
        return (precoOriginal - (precoOriginal * 0.15)).toFixed(2); 
    }
    else if (pagamento === 'Em duas vezes')
    {
        return precoOriginal.toFixed(2);
    }
    else if (pagamento === 'Acima de duas vezes')
    {
        return (precoOriginal + (precoOriginal * 0.10)).toFixed(2);
    }
}

function meioPagamento (pagamento, valor){
    if (pagamento === 'A vista no Débito')
    {
        return 'O valor a ser pago será ' + valor; 
    }
    else if (pagamento === 'A vista no Dinheiro/Pix')
    {
        return 'O valor a ser pago será ' + valor; 
    }
    else if (pagamento === 'Em duas vezes')
    {
        return 'O valor a ser pago será ' + valor;
    }
    else if (pagamento === 'Acima de duas vezes')
    {
        return 'O valor a ser pago será ' + valor;
    }
}

(function main(){
    const precoOriginal = 15;
    const pagamento = 'A vista no Débito';

    const valor = calculoCorreto(precoOriginal, pagamento);
    console.log(meioPagamento(pagamento, valor));
})();



