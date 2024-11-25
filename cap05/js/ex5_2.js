const frm = document.querySelector("form");
const resultado = document.getElementById("inResultado");


frm.addEventListener("submit", (e)=>{
    var num = Number(frm.inNumero.value);
    var resp = `${num}, `;
    while(num!=0){
        num --;
        if(num != 0){
            resp += `${num}, `;
        }
    } 
    resultado.innerText = resp + " 0";
    
    e.preventDefault();
})
