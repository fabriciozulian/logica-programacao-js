const frm = document.querySelector("form");
const promocao = document.getElementById("inPromocao");
const precoPromocao = document.getElementById("inPrecoPromocao");

frm.addEventListener("submit", (e) =>{
    let precoCalculado = ((Number(frm.inPreco.value) * 2) + (Number(frm.inPreco.value) * 0.5)).toFixed(2);

    promocao.innerText = `${frm.inProduto.value} - Promoção: Leve 3 por R$: ${precoCalculado}`

    precoPromocao.innerText = `O 3º produto custa apenas R$: ${(Number(frm.inPreco.value) * 0.5).toFixed(2)}`;
    e.preventDefault();
})