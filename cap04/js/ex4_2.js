const frm = document.querySelector("form");
//const masculino = frm.inMasculino.checked;
frm.addEventListener("submit", (e) =>{
    if(frm.inMasculino.checked)
    {
        let pesoIdeal = 22 * Number(Math.pow(frm.inAltura.value, 2));
        document.getElementById("inResultado").innerText = `${frm.inNome.value}: Seu peso ideal é ${pesoIdeal.toFixed(3)}`;
    }else{
        let pesoIdeal = 21 * Number(Math.pow(frm.inAltura.value, 2));
        document.getElementById("inResultado").innerText = `${frm.inNome.value}: Seu peso ideal é ${pesoIdeal.toFixed(3)}`;
    }
    e.preventDefault();
})

function limparCampos(){
    frm.inNome.value = null;
    frm.inAltura.value = null;
    frm.inMasculino.checked = false;
    frm.inFeminino.checked = false;
    document.getElementById("inResultado").innerText = null;
    
}