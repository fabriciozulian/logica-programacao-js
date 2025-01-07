const frm = document.querySelector("form");


frm.addEventListener("submit", (e) =>{
    
    if(verificaPrimo(Number(frm.inNumero.value))){
        console.log("primo");
        document.getElementById("inResposta").innerHTML = `${frm.inNumero.value} é um número primo`;
    }else{
        console.log("n primo");
        document.getElementById("inResposta").innerHTML = `${frm.inNumero.value} não é um número primo`;
    }
    e.preventDefault();
}
)
function verificaPrimo(x){
    let div = 0;
    for(let i=1 ; i<=x ; i++){
        if(x%i === 0){
            div ++;
        }
    }
    return div === 2 ? true : false ;
}

