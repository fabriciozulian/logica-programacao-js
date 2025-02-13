const criancas = [];
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(criancas.length == 0){
        const nome = frm.inNome.value;
        const idade = Number(frm.inIdade.value);
        criancas.push({nome: nome, idade: idade});
        alert("Criança adicionada!")
    } else{
        const nome = frm.inNome.value;
        const idade = Number(frm.inIdade.value);
        if(verificaExistencia(nome)){
            alert("true");
        } else {
            alert("false");
        }

    }
    limparCampos();
})

function verificaExistencia(a){
    let teste = criancas.some(crianca => crianca.nome === a)
    return teste;
}

function limparCampos(){
    frm.inNome.value = "";
    frm.inIdade.value = "";
}