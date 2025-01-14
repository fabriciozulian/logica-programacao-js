frm = document.querySelector("form");

var pacientes = [];
var pacientesUrgentes = [];
var emAtendimento;


//Adicionar um novo paciente na fila
frm.btAdicionar.addEventListener("click", ()=> {
    let x = frm.inPaciente.value;
    pacientes.push(x);
    frm.inPaciente.value = "";
    exibirLista();
})

//Adiciona um paciente na fila de urgênte
frm.btAdicionarUrgente.addEventListener("click", () => {
    let x = frm.inPaciente.value;
    pacientesUrgentes.push(x);
    frm.inPaciente.value = "";
    exibirLista();
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
        exibirLista();
    }else{
        alert("Não existem pacientes na fila")
    }
        
})


function exibirLista(){
    let listaEspera = "";
    let npacientes = 0;
   for(let i = 0 ; i < pacientesUrgentes.length ; i++){
       
       if(pacientesUrgentes[i] != isNaN){
           npacientes++;
           listaEspera += `${npacientes}. ${pacientesUrgentes[i]} <br>`;
       }
       
   }
   for(let j = 0 ; j < pacientes.length ; j++){
       if(pacientes[j] != isNaN){
           npacientes ++;
           listaEspera += `${npacientes}. ${pacientes[j]} <br>`;
       }
   }
   document.getElementById("inListaDeEspera").innerHTML = listaEspera;
}