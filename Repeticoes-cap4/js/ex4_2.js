function Descrescente() {
    var inNumber = document.getElementById('inNumber');
    var outResposta = document.getElementById('outResposta');

    var numero = Number(inNumber.value);

    if (numero == 0 || isNaN(numero)) {
        outResposta.textContent = `Informe um número válido...`;
        inNumber.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";

    for (var i = numero; i > 0; i - 1) {
        resposta = resposta + i + ", ";
    }
    outResposta.textContent = resposta;

}

var btDecrescente = document.getElementById('btDecrescente').addEventListener('click', Descrescente);