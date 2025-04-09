const situacao = (nota, media) => {
    if (nota >= media) {
        alert("Aprovado");
    } else {
        alert("Reprovado")
    }
}

const prova1 = Number(prompt("Qual Nota: "));

situacao(prova1, 7);