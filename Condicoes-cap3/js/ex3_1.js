function Calcula() {
    var inNome = document.getElementById('inNome').value;
    var inNota1 = Number(document.getElementById('inNota1').value);
    var inNota2 = Number(document.getElementById('inNota2').value);
    var outMedia = document.getElementById('outMedia');
    var outSituacao = document.getElementById('outSituacao');
    var media = (inNota1 + inNota2) / 2;

    outMedia.textContent = `Média das Notas: ${media}`;
    if (media >= 7) {
        outSituacao.textContent = `Parabéns ${inNome}! Você foi Aprovado!!!`;
        outSituacao.style.color = "blue";
    } else {
        outSituacao.textContent = `Parabéns ${inNome}! Você foi Reprovado!!!`;
        outSituacao.style.color = "red";
    }
}

var btMedia = document.getElementById('btMedia').addEventListener('click', Calcula);