const frm = document.querySelector("form");
const result = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    frm.inVelocidadeCondutor.value <= frm.inVelocidadePermitida.value ? result.innerText = "Sem Multa" : frm.inVelocidadeCondutor.value <= (frm.inVelocidadePermitida.value * 1.2) ? result.innerText = "Multa Leve" : result.innerText = "Multa Grave";
    e.preventDefault();
})