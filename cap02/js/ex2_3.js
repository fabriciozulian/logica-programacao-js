frm = document.querySelector("form");

function calcularResultado(valor)
{
    let entrada = Number(valor) / 2;
    let parcela = entrada /12;
    const _ModeloCarro = document.getElementById("inCarro").value;
    document.getElementById("inMenssagem").innerText = `Promoção: ${_ModeloCarro}`
    document.getElementById("inEntrada").innerText = `Entrada : ${entrada}`
    document.getElementById("inParcela").innerText = `+12x de R$${parcela.toFixed(2)}`
}

frm.addEventListener("submit", (e) => {
    const _Entrada = frm.inValorCarro.value;
    calcularResultado(_Entrada);
    e.preventDefault();
})