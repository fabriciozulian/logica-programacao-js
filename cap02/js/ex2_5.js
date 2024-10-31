const frm = document.querySelector("form");

frm.addEventListener("submit", (e) =>{
    document.getElementById("inPromoMedicamento").innerText = `Promoção de ${frm.inMedicamento.value}`;
    document.getElementById("inPromoValor").innerText = `Leve 2 por apenas R$` + Math.floor(Number(frm.inPreco.value)).toFixed(2);
    e.preventDefault();    
})