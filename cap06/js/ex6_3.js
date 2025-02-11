const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value;
    const preco = frm.inPreco.value;
    carros.push({modelo, preco});
    limpar();
    alert("Carro adicionado!")
    
})

frm.btListar.addEventListener("click", () => {
    if(carros.length == 0){
        alert("Não há carros na lista");
    }
        const lista = carros.reduce((acumulador, carro) => 
            acumulador + carro.modelo + "- R$ " + carro.preco.toFixed(2) + "\n", "");
        resp.innerText = `Lista dos Carros Cadastrados \n${"-".repeat(40)}\n${lista}`;
    
})

function limpar(){
    frm.inModelo.value = "";
    frm.inPreco.value = "";
}