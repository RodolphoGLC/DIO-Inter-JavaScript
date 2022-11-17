const precoEtanol = 4.41;
const precoGasolina = 6.59;
const kmPorL = 9;
const distanciaKm = 120;
const tipoCombustivel = 'Gasolina'; //'Etanol';

const litosGastos = distanciaKm / kmPorL;

if (tipoCombustivel === 'Etanol') 
{
    const valorGasto = litosGastos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} 
else if (tipoCombustivel === 'Gasolina')
{
    const valorGasto = litosGastos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
else
{
    console.log('Você escreveu o seu tipo de combustivel da forma errada - Gasolina - Etanol')
}
