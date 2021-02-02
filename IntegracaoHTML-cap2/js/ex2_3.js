function Calcula() {
    var inVeiculo = document.getElementById('inVeiculo').value;
    var inPreco = Number(document.getElementById('inPreco').value);

    var outVeiculo = document.getElementById('outVeiculo');
    var outEntrada = document.getElementById('outEntrada');
    var outParcela = document.getElementById('outParcela');

    var calcEntrada = inPreco * 0.50;
    var parcela = (inPreco * 0.50) * 12;

    outVeiculo.textContent = `Promoção: ${inVeiculo}`;
    outEntrada.textContent = `Entrada de R$${calcEntrada}`;
    outParcela.textContent = `+ 12x de R$${parcela}`;
}

var btVerPromo = document.getElementById('btVerPromo');
btVerPromo.addEventListener('click', Calcula);