function Calcular() {
    var inValor = Number(document.getElementById('inValor').value);
    var inTempo = Number(document.getElementById('inTempo').value);
    var outTotal = document.getElementById('outTotal');

    var total = Math.ceil(inTempo / 15) * inValor;

    outTotal.textContent = `Valor a Pagar R$${total.toFixed(2)}`;

}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', Calcular);