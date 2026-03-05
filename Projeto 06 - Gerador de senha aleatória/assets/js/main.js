const caracteresSenha = 'QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm1234567890!@#$%&*/?+-'
const gerarSenha = document.getElementById('gerarSenha');
const copiarSenha = document.getElementById('copiarSenha');
let senha = document.getElementById('senha');
let tamanho = document.getElementById('tamanho');

function validaTamanho () {
    if (isNaN(parseInt(tamanho.value))) {
        senha.innerText = 'insira uma quantidade de caracteres';
        return false;
    }
    return true;
}

gerarSenha.addEventListener('click', function() {
    if (!validaTamanho()) return;

    senha.innerText = '';
    for (let i = 0; i < tamanho.value; i++) {
        let aleatorio = Math.floor(Math.random() * (caracteresSenha.length));
        senha.innerText += caracteresSenha[aleatorio];
        };
});

copiarSenha.addEventListener('click', function () {
    navigator.clipboard.writeText(senha.innerText);
});