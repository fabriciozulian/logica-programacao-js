const frm = document.querySelector("form");
const result = document.querySelector("#resposta");


frm.btCalcula.addEventListener("click", (e) => {
    e.preventDefault();
    
    const modelo = frm.inModelo.value;
    const anoFabricacao = frm.inAnoFabricacao.value;
    const preco = frm.inPreco.value;
    const [entrada, parcela, situacao] = calcula(anoFabricacao, preco);
    let calculo = `${modelo} - ${situacao} \n Entrada R$: ${entrada} \n +10x de R$: ${parcela}`;
    result.innerText = calculo;
    
})


function calcula(anoFabricacao, preco){
    situacao = anoFabricacao == 2025 ? "Novo" : 2025 - anoFabricacao <= 2 ? "Seminovo" : "Usado";
    if(situacao == "Novo"){
        let entrada = preco/2;
        let parcela = (preco/2)/12;
        return [entrada.toFixed(2), parcela.toFixed(2), situacao];
    } else {
        let entrada = preco*.3;
        let parcela = (preco -(preco*.3))/12;
        return [entrada.toFixed(2), parcela.toFixed(2), situacao];
    }
}