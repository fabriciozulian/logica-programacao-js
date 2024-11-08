const frm = document.querySelector("form");

frm.addEventListener("submit", (e)=>{
    let resultado = Number(frm.inHoraBrasil.value)+5>24 ? (Number(frm.inHoraBrasil.value)+5)-24 :Number(frm.inHoraBrasil.value) +5 ;
    document.getElementById("inResultado").innerText = `${resultado}`;
    e.preventDefault();
})