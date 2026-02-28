let numero = document.getElementById('numero');
let contador = 0;
const botaoMais = document.getElementById('incrementar');
const botaoMenos = document.getElementById('decrementar');
const botaoZerar = document.getElementById('zerar');

botaoMais.addEventListener('click', function() {
    atualizaNumero(contador + 1);
});

botaoMenos.addEventListener('click', function() {
    atualizaNumero(contador - 1);
});

botaoZerar.addEventListener('click', function() {
    atualizaNumero(0);
});

function atualizaNumero (novoValor) {
    contador = novoValor;
    numero.textContent = contador;
};