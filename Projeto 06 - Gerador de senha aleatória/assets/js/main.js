const caracteresSenha = 'QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm1234567890!@#$%&*/?+-'
const gerarSenha = document.getElementById('gerarSenha');
const copiarSenha = document.getElementById('copiarSenha');
let senha = document.getElementById('senha');
let tamanho = document.getElementById('tamanho');

gerarSenha.addEventListener('click', function() {
    senha.innerText = '';
    for (let i = 0; i < tamanho.value; i++) {
        let aleatorio = Math.floor(Math.random() * (caracteresSenha.length - 0) + 0);
        senha.innerText += caracteresSenha[aleatorio];
        };
});