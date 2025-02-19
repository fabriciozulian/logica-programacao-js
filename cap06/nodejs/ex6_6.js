/*b) Elaborar um programa que leia nome e idade de ‘n’ clientes de um
banco (até ser digitado ‘Fim’ no nome). Após, classifique e exiba os
clientes em 2 grupos: preferencial (a partir de 60 anos) e Fila normal (até
59 anos). Informe a ordem de atendimento em cada grupo de acordo com a
chegada dos clientes.*/

const prompt = require("prompt-sync")();
const pessoas = [];
console.log("Caso deseje finalizar digite 'Fim' no nome");
do {
    const nome = prompt("Nome:");
    if(nome == "Fim"){
        break;
    }

    const idade = Number(prompt("Idade:"));
    pessoas.push({nome, idade});
    console.log("Pessoa "+ nome +" foi registrada com sucesso!");
} while(true);

const preferencial = pessoas.filter(x => x.idade > 59);
let fila = pessoas.filter( x => x.idade < 59);
fila = [...preferencial, ...fila];

console.log("fila: \n" + "-".repeat(40));

for(pessoa of fila){
    console.log(pessoa.nome + " - " + pessoa.idade);
}


