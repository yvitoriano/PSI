//              0              1              2
//let nome = ['Pedro Leo', 'Pedro Lucas', 'João Vitor']

//Métodos em listas
// O tamanho da lista
//console.log(nome.length)

//Acessar elementos por indices
//console.log(nome[1])

//Inserir elementos na minha lista (fim do array)
//nome.push('Ana Clara')
//console.log(nome)

// Remover do final
// const nomeRemovido = nome.pop()
// console.log(nome, nomeRemovido)

//Inserir no inicio
//nome.unshift('Maria Clara')
//console.log(nome)

// Remover do inicio
//nome.shift()
//console.log(nome)

// Função SPLICE
// nome.splice(0,0, "Ana Clara")
// nome.splice(2,0, "Marcos")
// nome.splice(1,1)
// console.log(nome)

// Inserir Ana Clara (1°)
// Inserir Marcos (3°)
// Remova elemento (2°)



// Para concatenar listas
//let nome_meninos = ['Pedro Leo', 'Pedro Lucas', 'João Vitor']
//let nome_meninas = ['Ana Clara', 'Lourraine', 'Mirela']

//console.log(nome_meninos.concat(nome_meninas))

// Funções de callback
// Servem para que a gente consiga garantir a ordem de eventos assincronos (aqueles que não conseguimos definir a ordem das funções)

// criação de uma função para tornar o tempo aleatório
function rand(min = 1000, max= 5000){
    const num = Math.random() * (max-min) + min
    return Math.floor(num)
}

//função de callback
function f1(callback){
    setTimeout(function(){
        console.log('Realizando conexão com o banco de dados...')
        if (callback) {
            callback()
        }
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('Aguardando...')
        if (callback) {
            callback()
        }
    },rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('Conexão Estabelecida')
        if (callback) {
            callback()
        }
    }, rand())
    
}
f1(()=>{
    f2(()=>{
        f3(()=>{
            console.log('Encerrei a conexão...')
        })
    })
})