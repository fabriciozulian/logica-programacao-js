const frm = document.querySelector("form");
const result = document.querySelector("InResultado");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inValor.value);
    const juros = Number(frm.inPercentualJuros.value);
    const multa = Number(frm.inPercentualMulta.value);

    const valorAtual = 
})