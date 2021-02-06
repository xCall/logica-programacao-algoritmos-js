function Exibir() {
    var inValor = document.getElementById('inValor');
    var outNota100 = document.getElementById('outNota100');
    var outNota50 = document.getElementById('outNota50');
    var outNota10 = document.getElementById('outNota10');
    var valor = Number(inValor.value);

    if (valor <= 0 || valor == '') {
        outNota100.textContent = `Informe valores válidos para funcionar`;
        inValor.focus();
        return;
    }
    if (valor % 10 != 0) {
        outNota100.textContent = `Informe um valor multiplo de 10`;
        inValor.focus();
        return;
    }

    var nota100 = Math.floor(valor / 100);
    var resto = valor % 100;
    var nota50 = Math.floor(resto / 50);
    resto = resto % 50;
    var nota10 = Math.floor(resto / 10);

    if (nota100 > 0) {
        outNota100.textContent = `Notas de R$100: ${nota100}`;
    }
    if (nota50 > 0) {
        outNota50.textContent = `Notas de R$50: ${nota50}`;
    }
    if (nota10 > 0) {
        outNota10.textContent = `Notas de R$10: ${nota10}`;
    }

}

var btExibir = document.getElementById('btExibir').addEventListener('click', Exibir);