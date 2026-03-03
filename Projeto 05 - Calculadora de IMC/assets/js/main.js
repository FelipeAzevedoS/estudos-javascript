const botao = document.getElementById('botao');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let imcCalculado = document.getElementById('imcCalculado');

botao.addEventListener('click', function() {
    let imc = parseFloat(peso.value) / parseFloat(altura.value) * parseFloat(altura.value);
    imcCalculado.innerText = imc.toFixed(2);
});