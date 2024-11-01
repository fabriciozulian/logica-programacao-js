var media;
var situacao;
function a(x,y){
media = ((Number(x)+Number(y))/2)
situacao = true;
    if (result<7){
        situacao = false;
    }
    console.log(situacao.toString());
    return situacao;
}

const frm = document.querySelector("form");
frm.addEventListener("submit", (e) =>{
    a(frm.inNota1.value, frm.inNota2.value);
    document.getElementById("inMedia").innerText = `Média das Notas ${media.toFixe(2)}`;
    document.getElementById("inMensagem").innerText = `${frm.inNomeAluno} + "você foi" + ${(media < 7 ? "Reprovado" : "Aprovado Parabéns !")}`;
    e.preventDefault();
})
