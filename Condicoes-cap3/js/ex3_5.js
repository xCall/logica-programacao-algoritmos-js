function Calcula() {
    var inNumber = document.getElementById('inNumber');
    var outResultado = document.getElementById('outResultado');

    var number = Number(inNumber.value);
    
    if (number == '' || number == 0 || isNaN(number)) {
        outResultado.textContent = `Para continuarmos a conta é preciso que seja inserido um número válido.`;
        inNumber.focus();
        return;
    }
    var raiz = Math.sqrt(number);
    if (raiz == Math.floor(raiz)) {
        outResultado.textContent = `O valor da Raiz é ${raiz}`;
    } else {
        outResultado.textContent = `Não há raiz quadrada para o número ${number}`
    }
}

var btRaiz = document.getElementById('btRaiz').addEventListener('click', Calcula);