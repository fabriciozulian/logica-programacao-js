do{
    var num = Number(prompt("Digite um número: "));
    if(num%2 === 0 && num !== 0){
        alert(`${num*2}`);
    }
    if(num%2 === 1 && num !== 0){
        alert(`${num*3}`);
    }

    if(num === 0){
        break;
    }
}while(!isNaN(num) || num == 0)

alert("Programa finalizado");