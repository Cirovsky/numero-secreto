/* variáveis */
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = sorteio(menorValor, maiorValor);
/* funções */
function sorteio (menorValor = 1, maiorValor = 1000) {
    const valorSorteado = parseInt(Math.random()*(maiorValor - menorValor + 1) + menorValor);
    return valorSorteado;
}
/* manipalação de elementos */
document.getElementById("menor-valor").textContent = `${menorValor}`;
document.getElementById("maior-valor").textContent = `${maiorValor}`;