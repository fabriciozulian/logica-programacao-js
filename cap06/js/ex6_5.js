const times = [];
const frm = document.querySelector("form");
const resp = document.querySelector("pre");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeTime = frm.inClube.value;
    if(nomeTime !== ""){
        if(times.length === 0){
            times.push({nome: nomeTime});
            alert("Time cadastrado!");
            frm.inClube.value = "";
        } else{
            if(times.some(time => time.nome === nomeTime)){
                alert(`O nome ${nomeTime} já foi cadastrado`);
                frm.inClube.value = "";
            } else{
                times.push({nome: nomeTime});
                alert("Time cadastrado!");
                frm.inClube.value = "";
            }
        }
    }
})

frm.btListar.addEventListener("click", () => {
    let listaDosTimes = "";
    for(time of times){
        listaDosTimes += `${time.nome}\n`;
    }
    resp.innerText = listaDosTimes;
})


frm.btMontarTabela.addEventListener("click", () => {
    const tabela = [...times];
    let jogos = "";
    if(tabela.length%2 !== 0){
        alert("Não é possível formar tabela com número ímpar de times cadastrados");
    } else{
        while(tabela.length > 0){
            jogos += `${tabela[0].nome} x ${tabela[tabela.length - 1].nome}\n`;
            tabela.shift();
            tabela.pop();
        }
    }
    resp.innerText = jogos;
})