function Deposito() {
    var inValor = document.getElementById('inValor');
    var outTime = document.getElementById('outTime');
    var outTroco = document.getElementById('outTroco');

    var styled = '2px solid red';
    var styled2 = '2px solid black'

    var valor = Number(inValor);

    if (valor == '' || valor <= 0 || isNaN(valor)) {
        outTime.textContent = `Para continuar informe um valor válido.`;
        inValor.focus()
        inValor.style.borderBottom = styled;
        inValor.style.transition = "0.3s";
        return;
    } else {
        inValor.style.borderBottom = styled2;
    }

    if (valor < 1) {
        outTime.textContent = `Valor Insuficiente.`;
    }
    if (valor == 1 || valor < 1.75) {
        if (valor == 1) {
            outTime.textContent = `Tempo: 30min.`;
        } else if (valor > 1 && valor < 1.75) {
            var soma = valor - 1;
            outTime.textContent = `Tempo: 30min.`;
            outTroco.textContent = `Troco: R$${soma.toFixed(2)}`;
        }
    } else if (valor == 1.75 || valor < 3) {
        if (valor == 1.75) {
            outTime.textContent = `Tempo: 60min.`;
        } else if (valor > 1.75 || valor < 3) {
            var soma = valor - 1.75;
            outTime.textContent = `Tempo: 60min.`;
            outTroco.textContent = `Troco: R$${soma.toFixed(2)}`;
        }
    } else if (valor == 3 || valor > 3) {
        if (valor == 3) {
            outTime.textContent = `Tempo: 120min.`;
        } else if (valor > 3) {
            var soma = valor - 3;
            outTime.textContent = `Tempo: 120min`;
            outTroco.textContent = `Troco: R$${soma.toFixed(2)}`;
        }
    }

}

var btConfirmar = document.getElementById('btConfirmar').addEventListener('click', Deposito);