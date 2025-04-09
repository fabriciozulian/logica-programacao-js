const frm = document.querySelector("form")


frm.btCalcula.addEventListener("click", (e) => {
    e.preventDefault();
    
    const modelo = frm.inModelo.value;
    const anoFabricacao = frm.inAnoFabricacao.value;
    const preco = frm.inPreco.value;



})


const situacaoModelo = (anoModelo) = (anoModelo == 2025 ? "Novo" : (2025 - anoModelo) <= 2 ? "Seminovo" : Usado);
const calcula = (anoModelo, precoModelo) = (situacaoModelo(anoModelo) == "Novo" ? )