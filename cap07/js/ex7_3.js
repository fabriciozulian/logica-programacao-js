let palavra = prompt("Digite uma palavra");

let ultimaLetraMaiuscula = palavra.charAt(palavra.length - 1).toUpperCase();
let palavraInvertida = ultimaLetraMaiuscula;
for(let i = palavra.length -2 ; i >= 0 ; i--){
    palavraInvertida += palavra.charAt(i);
}

alert("Palavra invertida: " + palavraInvertida);