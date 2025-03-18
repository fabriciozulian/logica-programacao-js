/*a) Elaborar um programa que leia uma fórmula matemática e analise se os
parênteses utilizados na fórmula estão corretos. A análise deve considerar
dois fatores: o número de “(“ deve ser igual ao número de “)” e, ao ler a
fórmula da esquerda para a direita, em nenhum momento, o número de “)”
pode ser maior que o número de “(”, ou seja, não pode fechar um parêntese
sem antes ter aberto.*/


const prompt = require("prompt-sync")();
const formula = prompt("Digite a formula");

const arreyFormula = formula.split("");
let abertura = 0;
let fechamento = 0;

for(let i=0 ; i < arreyFormula.length ; i++){
 

    if((abertura - fechamento > 1)){
        console.log("Número de parênteses de abertura maior que de fechamento");
        break;
    } else if(arreyFormula[i] == "("){
        abertura++;
    } else if(arreyFormula[i] == ")"){
        fechamento++;
    }
}


if(abertura == fechamento){
    console.log("Quantidade correta de parênteses");
} else {
    console.log("Quantidade de parênteses incorreta")
}