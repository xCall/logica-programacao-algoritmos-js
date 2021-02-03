function Calcula() {
    var inDescricao = document.getElementById('inDescricao').value;
    var inPreco = Number(document.getElementById('inPreco').value);
    var outDescricao = document.getElementById('outDescricao');
    var outPromo = document.getElementById('outPromo');

    var calcDesc = Math.floor(inPreco) * 2;

    outDescricao.textContent = `Promoção de ${inDescricao}`;
    outPromo.textContent = `Leve 2 por apenas R$${calcDesc.toFixed(2)}`;

}

var btPromo = document.getElementById('btPromo');
btPromo.addEventListener('click', Calcula);