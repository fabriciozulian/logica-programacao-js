const frm = document.querySelector("form");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let resultado = Number.isInteger(Math.sqrt(Number(frm.inNumero.value)));
    resultado === true ? document.getElementById("inResultado").innerText =`O número ${frm.inNumero.value} é uma raiz`: document.getElementById("inResultado").innerText = `O Número ${frm.inNumero.value} não é uma raiz`;
})