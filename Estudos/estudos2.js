/*const idade = 10
if(idade < 18 ){
    console.log("Você não pode ter acesso")
}else if (idade>=18 && idade<25){
    console.log("Você pode entrar com resalvas")
}else{
    console.log("Voce pode entrar")
}
*/

/*for(let i=0; i<10; i+2){
    console.log(i)
}

while(i>10){

} */

//array = [10, "Tiago", true, "Barreto"]
//console.log(array)

/*const pessoas = {
    nome: "Tiago",
    idade: 29,
    sexo: "M",
    endereço:{
        rua: "Rua lalala",
        cidade: "Natal",
        numero:20
    }
}

console.log(pessoas.endereço.rua)*/

// console.log(usuarios[1].nome)


/*console.log(false || "Tiago" && 'Barreto')

const corUsuario = null
const corPadrao = corUsuario || 'padrão'

console.log(corPadrao)

const nomeUsuario = ''
const nomePadrao = nomeUsuario || 'user111'
console.log(nomePadrao)*/


// FUNÇÃO
function soma(valor1, valor2){
    return valor1 + valor2
}

console.log(soma(10,15))

function somaTodosValores(...valores){
    for(let i=0; i<valores.length;i++){
        if(typeof(valores[i]) !== 'number'){
           return "valor inválido"
        }
    soma +=valores[i]
    }
    return soma
}

console.log(somaTodosValores(10,20,30,40,"lalala"))

//(...valores) =>{