const frm = document.querySelector("form");
const resultado = document.getElementById("inResultado");

frm.addEventListener("submit", (e) => {

    const numero = Number(document.getElementById("inNumero").value);
    
    if (isNaN(numero) || numero <= 0) {
        resultado.textContent = "Por favor, insira um número válido maior que zero.";
        return;
    }

    let somaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            console.log(i);
            somaDivisores += i;
        }
    }

    if (somaDivisores === numero) {
        resultado.textContent = `${numero} é um número perfeito!`;
    } else {
        resultado.textContent = `${numero} não é um número perfeito.`;
    }

    e.preventDefault();  
});