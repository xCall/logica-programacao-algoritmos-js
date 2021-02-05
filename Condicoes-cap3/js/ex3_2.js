function Calcular() {
    var inNome = document.getElementById('inNome');
    var rbMasculino = document.getElementById('rbMasculino');
    var rbFeminino = document.getElementById('rbFemenino');
    var altura = document.getElementById('inAltura');
    var outResposta = document.getElementById('outResposta');

    var nome = inNome.value;
    var altura = Number(inAltura.value);
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;


    if (nome == '' || (masculino.checked == false && feminino.checked == false)) {
        outResposta.textContent = `Por favor! Para continuar prencha os dados acima!`
        outResposta.style.color = 'red';
        nome.focus();
        return;
    }

    if (altura == 0 || isNaN(altura)) {
        outResposta.textContent = `Por favor! Informe a altura corretamente...`;
        outResposta.style.color = `red`;
        inAltura.focus()
        return;
    }

    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }
    outResposta.textContent = `${nome}. Seu peso ideal é ${peso.toFixed(3)} kg`;
    outResposta.style.color = 'black';

}
function Limpar() {
    document.getElementById('inNome').value = "";
    document.getElementById('rbMasculino').checked = false;
    document.getElementById('rbFemenino').checked = false;
    document.getElementById('inAltura').value = "";
    document.getElementById('outResposta').textContent = "";

    document.getElementById('inNome').focus();
}

var btResultado = document.getElementById('btCalcular');
btResultado.addEventListener('click', Calcular);

var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', Limpar);

