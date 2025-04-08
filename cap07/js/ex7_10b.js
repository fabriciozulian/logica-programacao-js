const frm = document.querySelector("form");
const result = document.querySelector("h2");

frm.btVerificaPalindromo.addEventListener("click", (e) => {
    e.preventDefault();
    const frase = document.getElementById("inFrase").value;
    const fraseSemEspaco = frase.replace(/ /g,"").toUpperCase();
    const fraseReversa = fraseSemEspaco.split("").reverse().join("");
    if(fraseSemEspaco == fraseReversa){
        result.innerText = "A frase é um Palíndromo";
    }else{
        result.innerText = "A frase não é um Palíndromo";
    }
})