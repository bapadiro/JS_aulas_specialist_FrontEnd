//Baseado em um código, exibe um produto a ele vínculado

let codigo = parseInt(prompt("Digite o Código do Procudo: "));
let produto;

switch(codigo){
    case 1:
        produto="Coca-Cola";
        break;
    case 2:
        produto="Sorvete";
        break;
    case 3:
        produto="Chocolate";
        break;
    case 4:
        produto="Bolacha";
        break;
    default:
        produto="Código Inválido";
    break;
}
alert(produto);