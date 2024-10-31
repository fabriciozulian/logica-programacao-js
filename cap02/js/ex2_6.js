const frm = document.querySelector("form");
const total = document.getElementById("inValorPagar");

frm.addEventListener("submit", (e) =>{
    total.innerText = `Valor a Pagar R$ ` + ((Number(frm.inValorQuinzeMinutos.value)/15) * Number(frm.inTempoDeUso.value)).toFixed(2);  
    e.preventDefault();
})