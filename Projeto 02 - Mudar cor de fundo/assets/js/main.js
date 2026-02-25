const hex = '0123456789ABCDEF';
const botao = document.getElementById('gerarCor');
const codigo = document.getElementById('codigoHex')
const botaoCopiar = document.getElementById('copiarCor');

let numerosHex = '#';

botao.addEventListener('click', function() {
    numerosHex = '#';
    for (let i = 0; i < 6; i++) {
    numerosHex += hex[Math.floor(Math.random() * 16)];
};
    
    codigo.innerHTML = numerosHex;
    document.body.style.backgroundColor = numerosHex;
});

    botaoCopiar.addEventListener('click', function() {
    navigator.clipboard.writeText(numerosHex);
}); 