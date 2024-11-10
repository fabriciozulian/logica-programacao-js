/*Atividades
Map

    Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

Filter

    Filtre e retorne todos os números pares de um array.

Reduce

    Some todos os números de um array
    Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/



//UTILIZAÇÃO DO MÉTODO MAP USANDO THIS
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}


const nums = [1, 2];

console.log('this -> maçã',mapComThis(nums, maca));

console.log('this -> laranja',mapComThis(nums, laranja));


//UTILIZAÇÃO DO MÉTODO MAP SEM USAR THIS
function mapSemThis(arr){
    return arr.map(function(item) {
        return item * 2;
    })
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));


//Filtre e retorne todos os números pares de um array

function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const MeuArrey = [1, 2, 4, 6, 8, 3, 44];


console.log(filtraPares(MeuArrey));

//Some todos os números de um array

function somarArrey(arr){
        return arr.reduce(function(prev, current){
            return prev + current;
        });
    }


console.log(somarArrey(MeuArrey));


//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const brinquedos = [
    {
        name: 'carro',
        preco: 20,
    },
    {
        name: 'boneca',
        preco: 30,
    }
];

const saldo = 100;

function retornaValorPosCompra(lista, saldo){
   return lista.reduce(function(acomulador,posterior){
        return acomulador - posterior.preco;

    }, saldo);
}

console.log(retornaValorPosCompra(brinquedos, saldo));
