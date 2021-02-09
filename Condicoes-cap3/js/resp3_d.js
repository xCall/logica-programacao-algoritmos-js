function Verificar() {
    var inLadoA = document.getElementById('inLadoA');
    var inLadoB = document.getElementById('inLadoB');
    var inLadoC = document.getElementById('inLadoC');
    var outLados = document.getElementById('outLados');
    var outTipo = document.getElementById('outTipo');

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if ((ladoA == "" || isNaN(ladoA)) || (ladoB == "" || isNaN(ladoB)) || (ladoC == "" || isNaN(ladoC))) {
        outLados.textContent = `Para continuar preencha os campos com valores válidos.`;
        return;
    }

    if
}