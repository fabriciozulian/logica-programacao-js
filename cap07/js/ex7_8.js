const frm = document.querySelector("form");
const result = document.querySelector("#inResultado");

const taxaMulta = 0.02;
const taxaJuros = 0.007;


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inValorConta.value);
    const dataVencimento = frm.inDataVencimento.value;
    const dataHoje = new Date();
    const dataVenc = new Date();
    
    
    const partes = dataVencimento.split("-");
    dataVenc.setDate(Number(partes[2]));
    dataVenc.setMonth(Number(partes[1]) - 1);
    dataVenc.setFullYear(Number(partes[0]));
    


    const atraso = dataVenc - dataHoje;
    console.log(atraso);
    let multa = 0;
    let juros = 0;

    if(atraso > 0){
        const dias = atraso/86400000;
        multa = valor * taxaMulta;
        juros = valor * taxaJuros * dias;
    }
    
    const total = valor + multa + juros;

    frm.inMulta.value = multa.toFixed(2);
    frm.inJuros.value = juros.toFixed(2);

    result.textContent = "Valor total: " + total.toFixed(2);
    
})