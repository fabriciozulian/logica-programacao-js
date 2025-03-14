const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.btRemoveEspaco.addEventListener("click",  () => {
    const palavra = frm.inPalavra.value;
    const palavraSemEspaco = palavra.replace(/ /g, "");
    resp.innerText = palavraSemEspaco;
})


frm.btTrocaLetra.addEventListener("click", () => {
    const div = document.getElementById('inDivTroca');
    div.classList.remove('oculta');
    const palavra = frm.inPalavra.value;
    const novaPalavra = palavra.replace(/${frm.inLetraAntiga}/g, `${frm.inNovaLetra}`);
    resp.innerText = novaPalavra;
})