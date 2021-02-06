function Fuso() {
    var inHoraBrasil = document.getElementById('inHoraBrasil');
    var outResposta = document.getElementById('outResposta');

    var horaBrasil = Number(inHoraBrasil.value);

    if (horaBrasil.value == '' || isNaN(horaBrasil)) {
        outResposta.textContent = `Informe o horário corretamente`;
        inHoraBrasil.focus();
        return;
    }

    var horaFranca = horaBrasil + 5;

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }
    outResposta.textContent = `Hora da França: ${horaFranca.toFixed(2)}`;
}

var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', Fuso);