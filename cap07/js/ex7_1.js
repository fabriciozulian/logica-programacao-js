const anuncio = prompt("Digite um Anúncio");

let numPalavras = 0;

for(let i=0 ; i<anuncio.length ; i++){
    if(anuncio.charAt(i) == " "){
        numPalavras ++;
    }
}

alert("O anúncio digitado contém " + (numPalavras+1) + " palavras");