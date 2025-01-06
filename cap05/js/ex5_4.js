do{
    const num =Number(prompt("Digite um número: "));
    if(num%2 === 0 && num !== 0){
        alert(`${num*2}`);
    }else{
        alert(`${num*3}`);
    }
    if(num === 0){
        break;
    }
}while(num !== 0 || isNaN(num))

alert("Programa finalizado");