const frm = document.querySelector("form");
const result = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const senha = frm.inSenha.value;
    validaSenha(senha);
})

function validaSenha(senha){
    let minuscula = senha.match(/[a-z]/g);
    let maiuscula = senha.match(/[A-Z]/g);
    let numero = senha.match(/[0-9]/g);
    let simbolo = senha.match(/\W|_/g);
  
    if(senha.length >= 8 && senha.length <= 15 && numero.length > 0 && minuscula.length > 0 && maiuscula.length > 1 && simbolo.length > 0){
        frm.inSenha.value = "";
        result.innerText = "A senha " + senha + " é valida!";
    } else{
        result.innerText = "A senha informada não é valida!"
    }
}