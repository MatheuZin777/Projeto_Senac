//Senac- Taguatinga
//Curso prograçào web
//Explorando a linguagem
//conhecendo variaveis em JS


let minhaidade = 20; //number
let meunome = "Matheus" //String
let SouEstudante = true //boolean
let valornulo = null //null
let valorindefinido; //nao atribuir valor 
let minhadatadenascimento = new Date(2004, 3, 6); //object

//estrutura de controle: condicionais 

let idadea = 19;
if (idadea >= 19) {
    console.log("Voce pode votar");
} else if (idade == 17) {
    console.log("Voce pode votar no proximo ano")
}

let idade = 15;
if (idade >= 18) {
    console.log("voce pode votar")
} else if (idade == 17) {
    console.log("Voce pode votar no proximo ano")
} else {
    console.log("Voce ainda nao pode votar");
}


let dia = 2;
switch (dia) {
    case 1:
        console.log("Segunda feira");
        break;
    case 2:
        console.log("Terça feira");
        break;
    default:
        console.log("dia invalido")

}

//estrutura de controle: Loop

for (let d = 0; d < 5; d++) {
    console.log(d);
}


let j = 1;
while (j < 5) {
    console.log(j);
    j++;
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//conversao de tipos de dados

let num = 10;
let str = "20";
console.log(num + str); // resultara em 1020 concatenação 

str = Number(str);
console.log(num + str); //Resultara em SOMA


//Operadores

let a = 15;
let b = 5;
let c;

c = a + b;
console.log(c);

c = a - b;
console.log(c);

c = a * b;
console.log(c);

c = a / b;
console.log(c);

// Função em JS

function nomeDaFuncao(param1, param2, param3) {
    //codigo a ser executado

}

function saudacao(nome) {
    console.log("ola, " + nome + "!");

}

let cor = "vermelho" //variavel Global
function mostrarcor(){
    console.log(cor);
}


function mostarcarro(){
    let carro = "Ferrari"; //variavel local
    console.log(carro)
}

mostrarcarro() //Imprime "ferrari"
console.log(carro); //erro carro is not defined


const numero = [1,2,3,4,5];
const quadrados = numeros.map(function(n){
    return n*n;
});

console.log(quadrados); //imprime 1,4,9,16,25

function cumprimentar(callback){
    console.log(óla);
    callback();
    function dizernome(){
        console.log('joao');
    }
}

cumprimentar(dizernome);