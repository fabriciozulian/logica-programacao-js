const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = frm.inNome.value;
    const emailInstitucional = criaEmail(nome);
    resp.innerText = emailInstitucional;
})

function criaEmail(nome){
    let email = "";
    nome.trim();
    const nomeArrey = nome.split(" ");
    for(let i=0 ; i<nomeArrey.length -1; i++){
        const letra = nomeArrey[i].charAt(0);
        email += letra;

    }
    email += nomeArrey[nomeArrey.length-1] + "@empresa.com.br";
    return email;
}