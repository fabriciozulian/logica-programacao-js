/*A copa do mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos 1942 e 1946. Construir um programa que repita a leitura de números (anos) até ser digitado 0. Informe para cada ano se ele é ou não ano de copa do mundo*/


var ano = Number(prompt("Digite o ano"));
while(ano !== Number(0)){
    verificaSeTeveCopa(ano);
    ano = Number(prompt("Digite o ano"));
}
alert("fim");

function verificaSeTeveCopa(x){
    let ano = Number(x);
    let base = 1930;
    if(ano >= 1930){
        do{
            if(base !== 1942 && base !== 1946 && ano === base){
                return alert("Teve Copa !");
            }
            base+=4;
        } while (base <= 2025)
        return alert("Não teve copa");
    }else{
        alert("Não teve copa");
    }
}