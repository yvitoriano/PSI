//Questão 1 
let mensagem = "Seja Bem vindo"
console.log(mensagem);

//Questão 2 
let nomeProduto = "Bodysplash";
let preco = 39.90;
let disponibilidade = false; 

console.log("Produto: " + nomeProduto);
console.log("Preço: R$ " + preco);
console.log("Disponível: " + disponibilidade);

//Questão 3
let desconto = 0.10;
let precoDesconto = preco - (preco * desconto);

let quantidade = 2;
let totalCompra = precoDesconto * quantidade;

let entrega = 12.00;
let valorFinal = totalCompra + entrega; 

console.log("Preço com desconto de 10%: " + precoDesconto);
console.log("Subtotal 2 unidades: " + totalCompra);
console.log("Total + frete: " + valorFinal );

// Questão 4 

let nome = "Marina"
console.log("Seja bem-vindo(a), " + nome + "!");