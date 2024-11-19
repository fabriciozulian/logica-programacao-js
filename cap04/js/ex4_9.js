const frm = document.querySelector("form");
const tempo = document.getElementById("tempo");
const troco = document.getElementById("troco");

frm.addEventListener("submit", (e) => {
    frm.inValor.value >= 3 ? maior120(frm.inValor.value) :frm.inValor.value < 3 && frm.inValor.value >= 1.75 ? menor120(frm.inValor.value) : frm.inValor.value < 1.75 && frm.inValor.value >= 1 ? menor60(frm.inValor.value) : troco.innerText = "Valor insuficiente";
    e.preventDefault();
})


function maior120(x) {
    troco.innerText = `Troco R$${frm.inValor.value - 3}`;
    tempo.innerText = `Tempo: 120min`;
}

function menor120(x) {
    troco.innerText = `Troco R$${frm.inValor.value - 1.75}`;
    tempo.innerText = `Tempo: 60min`;
}

function menor60(x) {
    troco.innerText = `Troco R$${frm.inValor.value - 1}`;
    tempo.innerText = `Tempo: 30min`;
}