/* c) Elaborar um programa que simule saques em um caixa eletrônico de um
 banco. Ler o valor solicitado por clientes até ser digitado 0. Sabendo que o
 caixa dispõe apenas de notas de 10, exiba após cada leitura se o saque é
 válido ou inválido. Ao final, listar os saques válidos e a soma dos saques.
 Exiba também o número de saques inválidos.*/

const prompt = require("prompt-sync")(); //instanciando prompt-sync

console.log("Digite o valor do saque, quando for finalizar digite '0' ");

const saqueValido = [];

do {
    const valorSaque = Number(prompt("Digite o valor a ser sacado:"));
    if(valorSaque === 0){
        break;
    } else if(valorSaque%10 === 0){
        console.log("Saque é valido !");
        saqueValido.push({Saque: valorSaque});
    } else{
        console.log("O saque não é valido");
    }
} while(true);

console.log("Lista de saque validos\n" + "-".repeat(40));

for(saque of saqueValido){
    console.log("Valor: " + saque.Saque);
}

const total = saqueValido.reduce((acumulador, valores) => acumulador + valores.Saque, 0);

console.log("\nValor total do saque: " + total);