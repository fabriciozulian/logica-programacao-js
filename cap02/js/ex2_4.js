const frm = document.querySelector("form");
const valorTotal = document.getElementById("inValorTotal");

frm.addEventListener("submit", (e) =>
{
    valorTotal.innerText =`Valor a pagar R$: ` + ((Number(frm.inPrecoQuilo.value))/1000)*(Number(frm.inConsumoCliente.value)).toFixed(2);
    e.preventDefault();
    
})