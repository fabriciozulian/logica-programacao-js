/*Elaborar um programa que leia um número que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja um centena, exiba mensagem */

const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite o número "));

if(numero >= 1000 || numero < 100){
    console.log("Erro esse número não é uma centena");
}else{   
    let primeiroNum = Math.floor(numero/100);
    let sobra = numero%100;
    let segundoNum = Math.floor(sobra/10);
    let terceiroNum = Math.floor(sobra%10);
    console.log(`${terceiroNum}${segundoNum}${primeiroNum}`)
}