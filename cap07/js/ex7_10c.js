const frm = document.querySelector("form");
const result = document.querySelector("h2");

frm.btCalcula.addEventListener("click", (e) => {
    e.preventDefault();
    const comDesconto = Number(frm.inValorMulta.value)*.8;

    const dataInfracao = frm.inDataInfracao.value;
    const partes = dataInfracao.split("-");
    

    const dataVencimento = new Date();
    dataVencimento.setDate(Number(partes[2]));
    dataVencimento.setMonth(Number(partes[1]) - 1);
    dataVencimento.setFullYear(Number(partes[0]));

    const dia = dataVencimento.getDate();

    dataVencimento.setDate(dia + 90);
    const mes = dataVencimento.getMonth() + 1;
    const ano = dataVencimento.getFullYear();

    result.innerText = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    result.innerText += "\nValor com Desconto R$: " + comDesconto.toFixed(2);
})
