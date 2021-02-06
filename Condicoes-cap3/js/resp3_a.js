function ImparPar() {
    var inNumber = document.getElementById('inNumber');
    var outResposta = document.getElementById('outResposta');

    var imparPar = Number(inNumber.value);

    if (imparPar == '') {
        outResposta.textContent = `Informe um número válido.`;
        inNumber.focus();
        return;
    }
    if (imparPar % 2 == 0) {
        outResposta.textContent = `Resposta: ${imparPar} é par.`;
    } else {
        outResposta.textContent = `Resposta: ${imparPar} é impar.`;
    }

}

var btVerificar = document.getElementById('btVerificar').addEventListener('click', ImparPar);