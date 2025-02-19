const criancas = [];
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(criancas.length == 0){
        const nome = frm.inNome.value;
        const idade = Number(frm.inIdade.value);
        criancas.push({nome: nome, idade: idade});
        alert("Criança adicionada!");
    } else{
        const nome = frm.inNome.value;
        if (criancas.some(crianca => crianca.nome === nome)){
            alert(`criança com nome ${nome} já esta cadastradas`);
        } else{
            const idade = Number(frm.inIdade.value);
            criancas.push({nome: nome, idade: idade});
            alert("Criança adicionada!");
        }

    }
    limparCampos();
})

frm.btListarTodos.addEventListener("click", () => {
    let lista = "";  
  for (const crianca of criancas) {
    const { nome, idade } = crianca;
    lista += nome + " - " + idade + " anos\n";
  }
    resp.innerText = lista   
})

frm.btResumirPorIdade.addEventListener("click", () => {
    let lista = "";
    const idadeFiltrada = Number(prompt("Digite a idade das crianças a buscar: "));
    const criancasFiltradas = criancas.filter( x => x.idade <= idadeFiltrada);
    for (const crianca of criancasFiltradas){
        const { nome, idade} = crianca;
        lista += nome + " - " + idade + "anos\n";
    }
    resp.innerText = lista;
})

function limparCampos(){
    frm.inNome.value = "";
    frm.inIdade.value = "";
}