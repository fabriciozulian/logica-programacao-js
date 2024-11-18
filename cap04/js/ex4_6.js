const frm = document.querySelector("form");
const resultado = document.getElementById("inResultado");

frm.addEventListener("submit", (e) =>{
    const valorSaque = Number(document.getElementById("inValorSaque").value);
    calcularSaque(valorSaque);
    e.preventDefault();
})


function calcularSaque(x){
    let nota100=0, nota50=0, nota10=0;
    let resto = x;
    while(resto>=100){
        nota100++;
        resto -= 100;
    }

    while(resto<100 && resto>=50){
        nota50++;
        resto -= 50;
    }

    while(resto>=10 && resto<50){
        nota10++;
        resto -= 10;
    }

    resultado.innerHTML = `Notas de R$100: ${nota100}<br> 
                           Notas de R$50: ${nota50}<br> 
                           Notas de R$10: ${nota10}`;
}