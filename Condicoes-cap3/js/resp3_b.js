function Verificador() {
    var inVelPermitida = document.getElementById('inVelPermitida');
    var inVelCondutor = document.getElementById('inVelCondutor');
    var outResposta = document.getElementById('outResposta');
    var velPermitida = Number(inVelPermitida.value);
    var velCondutor = Number(inVelCondutor.value);
    var styleRed = '2px solid red';
    var styleNormal = '2px solid black'

    if ((velCondutor <= 0 || velPermitida <= 0) || (velCondutor == "" || velPermitida == "") || (isNaN(velPermitida) || isNaN(velCondutor))) {
        outResposta.textContent = `Informe um valor válido.`;
        inVelPermitida.style.borderBottom = styleRed;
        inVelCondutor.style.borderBottom = styleRed;
        inVelPermitida.focus();
        return;
    } else {
        inVelPermitida.style.borderBottom = styleNormal;
        inVelCondutor.style.borderBottom = styleNormal;
    }

    if (velCondutor <= velPermitida) {
        outResposta.textContent = `Sem Multa.`
    } else {
        var multa = velPermitida * 1.2;
        if(velCondutor <= multa) {
            outResposta.textContent = `Multa Leve.`
        } else {
            outResposta.textContent = `Multa Grave`;
        }
    }

}
var btVerificardor = document.getElementById('btVerificador').addEventListener('click', Verificador);