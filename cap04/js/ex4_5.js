const frm = document.querySelector("form");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let resultado = Number.isInteger(Math.sqrt(Number(frm.inNumero.value)));
    resultado === true ? document.getElementById("inResultado").innerText =` ${Math.sqrt(frm.inNumero.value)}`: document.getElementById("inResultado").innerText = `O Número ${frm.inNumero.value} não é uma raiz`;
})