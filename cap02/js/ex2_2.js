const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const duracao = Math.floor((Number(frm.inDuracao.value))/60);
    const minuto = (Number(frm.inDuracao.value)) % 60;
    const filme = frm.inNome.value;
    resp.innerText = ` Filme ${filme}, duração ${duracao} horas `;
    if(minuto !== 0)
    {
        resp.innerText += ` e ${minuto} minutos`;
    }
    e.preventDefault();
})