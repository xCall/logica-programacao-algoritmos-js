function Calcula() {
    var inQuilo = document.getElementById('inQuilo').value;
    var inConsumo = document.getElementById('inConsumo').value;
    var outValor = document.getElementById('outValor');
    var quilo = Number(inQuilo);
    var consumo = Number(inConsumo);
    var valor = (quilo / 1000) * consumo;

    outValor.textContent = `Valor a pagar R$${valor.toFixed(2)}`;

}

var btCalcula = document.getElementById('btCalcular');

btCalcula.addEventListener('click', Calcula);