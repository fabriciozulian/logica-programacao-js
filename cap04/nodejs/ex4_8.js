/* Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: 

a) Cada parcela deve ser de no mínimo, R$200,00 
b) O número máximo de parcelas permitido é de 6 */

const prompt = require("prompt-sync")();
const valor = Number(prompt("Total da compra: "));
var quantidadeParcela = 6;
var valorParcela = valor / quantidadeParcela;



while(valorParcela < 20){
    if(quantidadeParcela === 1){
        valorParcela = valor;
        break;
    }
    quantidadeParcela--;
    valorParcela = valor / quantidadeParcela;
}

console.log(`Quantidade de parcelas: ${quantidadeParcela}\nValor parcela: ${valorParcela.toFixed(2)}`);