const botao = document.getElementById('botao');
const frase = document.getElementById('frase');

botao.addEventListener('click', function () {
    frase.classList.toggle('escondido');
    if (frase.classList.contains('escondido')) {
        botao.innerText = 'Revelar';
    } else {
        botao.innerText = 'Esconder';
    }
});