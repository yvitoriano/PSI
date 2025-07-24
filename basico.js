/*const valor1 = 100
const valor2 = 200

console.log(valor1 + valor2) */

function soma (valor1, valor2){
    const soma = valor1 + valor2

    if(typeof(valor1) === "number" && typeof(valor2) ==='number'){
        if(valor1 < 0  || valor2 < 0){
            return false
        }
        else{
            return soma
        }
    }
    else{
        return `O tipo da variavel 1 é ${typeof(valor1)} e o tipo da variavel 2 é
        ${typeof(valor2)}`
    }
    }
const receberResultado = soma('Oii',200)
console.log(receberResultado)

