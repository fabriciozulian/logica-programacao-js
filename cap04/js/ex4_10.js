const frm = document.querySelector("form");
const result = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    let a, b, c;
    a = frm.inLadoA.value;
    b = frm.inLadoB.value;
    c = frm.inLadoC.value;

    if(verificarTriangulo(a,b,c) == true){
        let tipoTriangulo = verificaTipoTriangulo(a,b,c);
        result.innerHTML = `Lados podem formar um triângulo <br> Tipo:${tipoTriangulo}`;
    }else{
        result.innerText = `Lados não podem formar um triângulo`;
    }
    e.preventDefault();
})


//Verifica se é um triângulo

function verificarTriangulo(x, y, z){
    if(x < y + z || y < x + z || z < y + x){
        return true;
    }
    return false;
}

//Verifica o tipo de triângulo

function verificaTipoTriangulo(x, y, z){
    if(x === y && x === z){
        return "Equilátero";
    }

    if(x === y && x !== z || x === z && x !== y || z === y && z !== x){
        return "Isósceles";
    }
    return "Escaleno";
}