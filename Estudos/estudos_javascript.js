// Tipos de Dados :
idade = 10
console.log(typeof(idade))

const age = 10 + '10' /* Vai concatenar (juntar)*/

/*AND e OR - && ||*/
console.log("Cupcake..."); //Parecido com print em python 
//Variáveis :
/* let - Para as variáveis que possam ser mudadas
const - Não mudam */

let nome = "Yasmin"
nome = "Vitoriano"
console.log(nome)

const idade = 77
console.log(idade)

// Listas ["Yasmin", "Vitoriano"]
/*console.log(lista[1])*/

//Condicionais
// === } mesmo nome e mesmo tipo /    == } mesmo nome 
if (nome === "Vitoriano") {
    console.log("É seu nome ")
} else{
    console.log("Não é o meu nome")
};


//Repetições : FOR e WHILE

/* Funções  
function oi(nome){
   console.log("Olá" + nome)*/ 

function oi (nome){
    console.log(`Olá ${nome}! Você tem ${idade}`)
}

oi("Vitoriano")

//Classes:

let livro = {
    nome: "Pequeno Príncipe"
}

console.log(livro.nome)

