const frm = document.querySelector("form");
const result = document.querySelector("#inResultado");

frm.btCriptografar.addEventListener("click", (e) => {
    e.preventDefault();
    result.textContent = "";
    const mensagem = frm.inMensagem.value;
    const partMensagem = mensagem.split("");
    let pares = "";
    let impar = "";

    for (let i = 0; i < partMensagem.length; i++) {
        if (i % 2 == 1) {
            pares += partMensagem[i];
        } else {
            impar += partMensagem[i];
        }
    }

    result.textContent = impar + pares;
})

frm.btDecriptografar.addEventListener("click", (e) => {
    e.preventDefault();
    result.textContent = "";
    const mensagem = frm.inMensagem.value.split("");
    const metadeMensagem = Math.floor(mensagem.length / 2);
    console.log("metade" + metadeMensagem);
    let mensagemDecriptografada = "";

    if (mensagem.length % 2 == 0) {
        for (let i = metadeMensagem; i < mensagem.length; i++) {
            mensagemDecriptografada += mensagem[i - metadeMensagem];
            mensagemDecriptografada += mensagem[i];
        }
    } else {
        for (let i = 0; i < metadeMensagem; i++) {
            mensagemDecriptografada += mensagem[i];
            mensagemDecriptografada += mensagem[i + metadeMensagem + 1];
        }
        mensagemDecriptografada += mensagem[metadeMensagem];
        console.log(mensagemDecriptografada);
    }
    result.textContent = mensagemDecriptografada;
})


