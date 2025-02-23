const listaNumero = [];
frm = document.querySelector("form");
resp = document.getElementById("inListaNumero");
resultado = document.getElementById("inResultado");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero =  Number(frm.inNumero.value);
    if(validaNumero(numero)){
        listaNumero.push(numero);
    } else{
        alert("Digite um número válido!");
    }
    let listaAtual = listaNumero.join(",");
    resp.innerText = "Números: " + listaAtual;
})

frm.btVerificaOrdem.addEventListener("click", () => {
    const listaOrdenada = [...listaNumero].sort((a, b) => a - b);
    let statusOrdem = true;
    for(let i=0; i < listaNumero.length ; i++){
        if(listaOrdenada[i] !== listaNumero[i]){
           statusOrdem = false;
           break;
        }
    }
    if(statusOrdem){
        resultado.innerText = "Números estão em ordem corretamente!" 
    } else{
        resultado.innerText = "Atenção... Números não estão em ordem crescente."
    }
})


function validaNumero(x){
    return typeof x === 'number' && !isNaN(x);
}