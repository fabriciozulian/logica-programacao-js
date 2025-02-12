const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco});
    limpar();
    alert("Carro adicionado!")
    
})

frm.btListar.addEventListener("click", () => {
    if(carros.length == 0){
        alert("Não há carros na lista");
    }else{
        const lista = carros.reduce((acumulador, carro) => 
            acumulador + carro.modelo + "- R$ " + carro.preco.toFixed(2) + "\n", "");
        resp.innerText = `Lista dos Carros Cadastrados \n${"-".repeat(40)}\n${lista}`;
    }
    
})

frm.btFiltrar.addEventListener("click", () => {
    if(carros.length == 0){
        alert("Não há carros na lista");
    } else{
        const valor = Number(prompt("Digite o valor máximo do veículo: "));
        const carrosFiltrados = carros.filter( carro =>  carro.preco <= valor);
        let lista = "";
        if(carrosFiltrados.length == 0){
            alert(`Não existem carros com o valor abaixo ou igual a ${valor}`)
        }else{
            for (const carro of carrosFiltrados){
                lista += `${carro.modelo} - R$ ${carro.preco}\n`;
            }
            resp.innerText = `Carros com valor até ${valor} \n ${"-".repeat(40)}\n${lista}`;
        }
    }
})

frm.btPromocao.addEventListener("click", () => {
    if(carros.length == 0){
        alert("Não existe carros para ser aplicado promoção");
    } else{
        const porcentagemDesconto = Number(prompt("Digite o porcentagem de desconto a ser aplicada: "));
        const carroComDesconto = carros.map(x => ({
            modelo: x.modelo,
            preco: x.preco - ((x.preco * porcentagemDesconto)/100)
        }))
        let lista = "";
        for(carro of carroComDesconto){
            lista += `${carro.modelo} - R$ ${carro.preco}\n`;
        }
        resp.innerText = `Lista de carros com desconto\n${"-".repeat(40)}\n${lista}`;
    }
})

function limpar(){
    frm.inModelo.value = "";
    frm.inPreco.value = "";
}