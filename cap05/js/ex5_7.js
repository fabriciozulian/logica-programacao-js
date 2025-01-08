const frm = document.querySelector("form");
const result = document.getElementById("inResult");

frm.addEventListener("submit",(e)=>{
    const n = Number(frm.inQuantidade.value);
    result.innerHTML = `${calcSimb(n)}`;
    e.preventDefault();
})

function calcSimb(x){
    let p = Number(x);
    let temp = "";
    while(p!==0){
        temp += "*";
        p--;
       if(p===0){
        break;
       }
       temp += "-";
       p--;
    }
    return temp;
}
