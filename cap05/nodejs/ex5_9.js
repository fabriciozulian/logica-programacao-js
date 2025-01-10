//Elaborar um programa que leia o nome de um produto e número de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, e no máximo 2 etiquetas por linha.

const frm = document.querySelector("form");
const etiquetas = frm.inQtEtiquetas;

frm.addEventListener("submit", (e)=> {
    let nEtiqueta = Number(etiquetas.value);
    document.getElementById("inEtiquetas").innerHTML = `<pre>${gerarEtiquetas(nEtiqueta)}<pre>`;
    e.preventDefault();
})

function gerarEtiquetas(x){
   let f = x;
   let imp = "";
   while(x>=2){
    imp += `${frm.inProduto.value}` + `                  ` + `${frm.inProduto.value}<br>`;
    x -= 2;
   }
   if(x === 1){
    imp += `${frm.inProduto.value}`;
   }
   return imp; 
}