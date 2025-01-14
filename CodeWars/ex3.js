/*O software de reconhecimento de caracteres é amplamente utilizado para digitalizar textos impressos. Assim os textos podem ser editados, pesquisados ​​e armazenados em um computador.

Quando documentos (especialmente os muito antigos escritos com uma máquina de escrever) são digitalizados, os softwares de reconhecimento de caracteres geralmente cometem erros.

Sua tarefa é corrigir os erros no texto digitalizado. Você só precisa lidar com os seguintes erros:

S é mal interpretado como 5
O é mal interpretado como 0
I é mal interpretado como 1
Os casos de teste contêm números apenas por engano.*/

function correct(string)
{
	let palavra = string.split("");
  let frase = "";
  for(let i=0 ; i < palavra.length ; i++){
   palavra[i] === "5" ? frase += "S" : palavra[i] === "0" ? frase += "O" : palavra[i] === "1" ? frase+= "I" : frase+= palavra[i];
  }
  return frase;
}