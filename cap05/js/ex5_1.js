const frm = document.querySelector("form");
const numero = document.getElementById("inNumero");
const resultado = document.getElementById("inResultado");
var resposta = "";
frm.addEventListener("submit", (e) =>{
    exibirTabuada(numero);
    e.preventDefault();
})

function exibirTabuada(x){
    for(let i=1 ; i<=10 ; i++ ){
        resposta += `${(Number(x.value))} x ${i} = ${(Number(x.value)*i)} \n`;
    }
    resultado.innerText = resposta;
}

