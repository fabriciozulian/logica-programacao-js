console.log(calc(1,5));



function calc(a,b){
    let dif = a - b;
    const lista = [];
    lista.push(a);
    lista.push(b);
    for(let i=0 ; i < dif ;i++){
        lista.push((a+1));
    }   
    const total = lista.reduce((acumulador , valor) => acumulador + valor, 0);
    return total;
}