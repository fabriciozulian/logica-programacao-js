const frm = document.querySelector("form");
const resultado = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    Number(frm.inNumero.value)%2 === 0 ? resultado.innerText = "Par" : resultado.innerText = "Ímpar";
    e.preventDefault();
})