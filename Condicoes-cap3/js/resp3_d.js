function Verificar() {
    var inLadoA = document.getElementById('inLadoA');
    var inLadoB = document.getElementById('inLadoB');
    var inLadoC = document.getElementById('inLadoC');
    var outLados = document.getElementById('outLados');
    var outTipo = document.getElementById('outTipo');

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);
    console.log(ladoB)

    if ((ladoA == 0 || isNaN(ladoA)) || (ladoB == 0 || isNaN(ladoB)) || (ladoC == 0 || isNaN(ladoC))) {
        outLados.textContent = `Para continuar preencha os campos com valores válidos.`;
        return;
    }

    if (ladoA < ladoB + ladoC || ladoB < ladoA + ladoC || ladoC < ladoA + ladoB) {
        outLados.textContent = `Podem formar um triângulo`;
        if ((ladoA == ladoB) && (ladoA == ladoC)) {
            outTipo.textContent = `Tipo: Equilátero`;
        } else if ((ladoA == ladoB) || (ladoB == ladoC) || (ladoA == ladoC)) {
            outTipo.textContent = `Tipo: Isóceles`
        } else if (((ladoA != ladoB) != ladoC) || ((ladoB != ladoC) != ladoA) || ((ladoA != ladoC) != ladoB)) {
            outTipo.textContent = `Tipo: Escaleno`;
        }
        return;
    } else {
        outTipo.textContent = `Impossivel formar um triângulo`
    }
}

var btVerificar = document.getElementById('btVerificar').addEventListener('click', Verificar);