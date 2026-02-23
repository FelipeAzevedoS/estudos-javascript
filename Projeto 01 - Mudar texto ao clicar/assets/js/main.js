const frases = ['céu vermelho', 'mar azul', 'terra marrom', 'ar branco', 'raio amarelo'];

let indice = 0;
let frase = document.getElementById("frase");

frase.innerHTML = frases[indice];

const botao = document.getElementById("trocar");
botao.addEventListener('click', function () {
    indice = (indice + 1) % frases.length; 
    frase.innerHTML = frases[indice];
});