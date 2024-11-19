/* A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam R$12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar */

const prompt = require("prompt-sync") (); //adiciona pacote prompt-sync
const pessoas = Number(prompt("Número de Pessoas: ")); //lê dados de entrada
const peixes = Number(prompt("Número de Peixes: "));
let pagar;

if(peixes <= pessoas){
    pagar = pessoas * 20;
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(`Pagar ${pagar.toFixed(2)}`); //exibe valor a ser pago;