const calculaMedia = (...notas) => {
    const num = notas.length;
    if(num == 0){
        alert("Digite no mínimo uma nota");
        return;
    }
    let soma = 0;
    for(const nota of notas){
        soma += nota;
    }
    const media = soma / num;
    alert("Média: " + media.toFixed(2));
}


const entrada = prompt("Digite as notas: ");
const notas = entrada.split(",").map( n => Number((n.trim())));
calculaMedia(...notas);