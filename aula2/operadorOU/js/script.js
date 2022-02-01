//Ler o total de uma venda e conceda 20% de desconto
//Caso o valor da compra seja superior a R$ 1.000,00
//Ou se o cupom de desconto for DESCONTO20

let valorCompra = parseFloat(prompt("Digite o Valor da Compra: "));
let cumpomDesconto = prompt("Cumpom de Desconto: ");
let valorFinal;

if(valorCompra>1000 || cumpomDesconto=="DESCONTO20"){
    valorFinal=valorCompra-(valorCompra*0.2);
}else{
    valorFinal=valorCompra;
}
alert(`Valor da compra: R$ ${valorFinal}`);