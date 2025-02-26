const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const nomePartes = nome.split(" ");
    resp.innerText = nomePartes[0] + " " + nomePartes[nomePartes.length - 1];
})