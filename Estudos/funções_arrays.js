/*const numeros = [5,10,30,49,50,22,57,84,90]

// FILTER

const numerosFiltrados = numeros.filter((valor, indice, array)=>{
///   console.log(valor, indice)  - Número e sua posição 
      if(valor > 10){
        return true
      }

      else{
        return false
      }
})

console.log(numerosFiltrados)*/

/*const numerosPares = numeros.filter((valor, indice, array)=>{
    if(valor % 2 === 0){
        return valor
    }
})

console.log(numerosPares)*/

// Nome com 5 letras ou mais (lenght)
// pessoas com mais de 50 
//nome termina com 'a' (ensWith('a'))

/*const pessoas = [
    {nome: 'Tiago', idade:29},
    {nome: 'João', idade:19},
    {nome: 'Maria', idade:43},
    {nome: 'Joana', idade:63},
    {nome: 'Wallace', idade:67},
]

const pessoasComNomeGrande = pessoas.filter((valor)=>{
    if(valor.nome.length >= 5){
        return valor
    }
})

console.log(pessoasComNomeGrande)
*/

//MAP

//const numeros = [5,10,30,49,50,22,57,84,90,20]

/*const numerosAtualizados = numeros.map((valor, indice, array)=>{
    return valor*2
})*/


//Retornar o nome das pessoas
//Adicionar uma chave indice que receberá o valor do indice de cada elemento

const pessoas = [
    {nome: 'Tiago', idade:29},
    {nome: 'João', idade:19},
    {nome: 'Maria', idade:43},
    {nome: 'Joana', idade:63},
    {nome: 'Wallace', idade:67},
]

const nomePessoas = pessoas.map((valor)=>{
    return valor.nome
})

//console.log(nomePessoas)

const comIds = pessoas.map((valor, indice)=>{
    valorId = indice
    return 
})
