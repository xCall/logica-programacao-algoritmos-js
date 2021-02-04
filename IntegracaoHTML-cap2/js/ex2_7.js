function Calcula() {
    var inProduto = document.getElementById('inProduto').value;
    var inPreco = Number(document.getElementById('inPreco').value);
    var outProduto = document.getElementById('outProduto');
    var outPreco = document.getElementById('outPreco');
    var calcDesc = inPreco * 0.5;
    var total = inPreco * 3 - calcDesc;

    outPreco.textContent = `O 3º produto custa apenas R$${calcDesc.toFixed(2)}`;
    outProduto.textContent = `${inProduto} - Promoção: Leve 3 pague por R$${total.toFixed(2)}` ;
}

var btVerPromo = document.getElementById('btVerPromo');
btVerPromo.addEventListener('click', Calcula);