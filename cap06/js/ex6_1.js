frm = document.querySelector("form");

var pacientes = [];
var pacientesUrgentes = [];
var emAtendimento;


//Adicionar um novo paciente na fila
frm.btAdicionar.addEventListener("click", ()=> {
    let x = frm.inPaciente.value;
    pacientes.push(x);
    if(pacientes.length>0){
        for(paciente of pacientes){
            console.log(paciente);
        }
     }
    
})

//Adiciona um paciente na fila de urgênte
frm.btAdicionarUrgente.addEventListener("click", () => {
    let x = frm.inPaciente.value;
    pacientesUrgentes.push(x);

    if(pacientesUrgentes.length>0){
        for(paciente of pacientesUrgentes){
          console.log(paciente);
        }
    }
})

//Verifica se tem pacientes urgentes e atende 
frm.btAtender.addEventListener("click", () => {
    if((pacientes.length + pacientesUrgentes.length)>0 ){
        if(pacientesUrgentes.length > 0){
            let x = pacientesUrgentes[0];
            emAtendimento = x;
            pacientesUrgentes.shift();
        }else{
            let x = pacientes[0];
            emAtendimento = x; 
            pacientes.shift();
        }
        document.getElementById("inAtendimento").innerHTML = `Em Atendimento: ${emAtendimento}`;
        let texto;
        let npacientes;
        for(let i = 0 ; i <= pacientesUrgentes.length ; i++){
            
             texto += `${npacientes+1}. ${pacientesUrgentes[i]} <br>`
            
        }
        for(let j = 0 ; i <= pacientes.length ; j++){
            texto += `${npacientes+1}. ${pacientes[j]}`;
        }
        document.getElementById("inListaDeEspera").innerHTML = texto;
    }else{
        alert("Não existem pacientes na fila")
    }
        
})

function atender(x){
    document.getElementById("inAtendimento").innerHTML = `Em Atendimento: ${x}`;
    let lista;
    for(let i=0 ; i <= (pacientesUrgentes.length + pacientes.length) ; i++){
        if(pacientesUrgentes > 0 && i < pacientesUrgenteslenght){
            lista += `${i+1}. ${pacientesUrgentes[i]} + <br>`
        }else{
            lista += `${i+1}. ${pacientes[i]} + <br>`
        }
    }
    document.getElementById("inListaDeEspera").innerHTML = lista;
}


