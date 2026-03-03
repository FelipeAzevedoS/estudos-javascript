const botao = document.getElementById('botao');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let imcCalculado = document.getElementById('imcCalculado');
let classificacao = document.getElementById('classificacao');

botao.addEventListener('click', function() {
    let imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
    imcCalculado.innerText = imc.toFixed(2);

    if(imc < 18.5) {
        classificacao.innerText = "Classificação: Magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao.innerText = "Classificação: Normal";
    } else if (imc >= 25.0 && imc < 29.9) {
        classificacao.innerText = "Classificação: Sobrepeso";
    } else if (imc >= 30.0 && imc < 39.9) {
        classificacao.innerText = "Classificação: Obesidade";
    } else if (imc >= 40.0) {
        classificacao.innerText = "Classificação: Obesidade grave";
    }
});