const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.btRemoveEspaco.addEventListener("click",  () => {
    const palavra = frm.inPalavra.value;
    const palavraSemEspaco = palavra.replace(/ /g, "");
    resp.innerText = palavraSemEspaco;
})