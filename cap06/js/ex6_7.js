const notaAlunos = [];
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(notaAlunos.length === 0){
        if(frm.inCandidato.value !== null && frm.inAcertos.value !== null){
            notaAlunos.push({
                nomeAluno: frm.inCandidato.value,
                acertoAluno: frm.inAcertos.value
            })
            alert("Candidato " + frm.inCandidato.value + " cadastrado!");
            limparDados();
        } else{
            alert("Nome do candidato ou quantidade de acertos invalida!");
        }
    } else{
        if(notaAlunos.some(aluno => aluno.nomeAluno === frm.inCandidato.value)){
            alert("Candidato já cadastrado, informe um candidato valido!");
        } else{
            notaAlunos.push({
                nomeAluno: frm.inCandidato.value,
                acertoAluno: frm.inAcertos.value
            })
            alert("Candidato " + frm.inCandidato.value + " cadastrado!");
            limparDados();
        }
    }
})

frm.btListarTodos.addEventListener("click", () => {
    let listaDosAlunos = "";
    for(aluno of notaAlunos){
        listaDosAlunos += aluno.nomeAluno + " - " + aluno.acertoAluno + (Number(aluno.acertoAluno) > 1 ? " acertos" : " acerto") + "\n"; 
    }
    resp.innerText = listaDosAlunos;
})


frm.btAprovados.addEventListener("click", () => {
    console.log(notaAlunos);
    const acertosMinimos = Number(prompt("Número de Acertos para Aprovação"));
    let alunosAprovados = notaAlunos.filter(aluno => Number(aluno.acertoAluno) >= Number(acertosMinimos)).sort((a, b) => b.acertoAluno - a.acertoAluno);
    let listaAprovados = "Candidatos aprovados para a segunda etapa\n" + "-".repeat(40) + "\n";
    for(aluno of alunosAprovados){
        listaAprovados += aluno.nomeAluno + " - " + aluno.acertoAluno + " acertos\n";
    } 
    resp.innerText = listaAprovados;
})


function limparDados(){
    frm.inCandidato.value = "";
    frm.inAcertos.value = "";
}