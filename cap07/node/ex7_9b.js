const prompt = require("prompt-sync")();

const tamanhoArvore = prompt("Digite o tamanho da árvore");

for(let i=0 ; i < tamanhoArvore ; i++){
    const espaco = 30 + (tamanhoArvore - i);
    console.log(" ".repeat(espaco) + "*".repeat(i*2));
}

