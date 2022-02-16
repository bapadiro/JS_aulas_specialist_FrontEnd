/*Formas de criar Arrays

const carros = ["Renegade", "Toro", "Ranger"];

/*acrescentar mais itens
const carros = [];
carros [0] = "Renegade";
carros [1] = "Toro";
carros [2] = "Ranger";

//Define o construtor, mas não difere dos outros exemplos
const carros=new Array("Renegade", "Toro", "Ranger");

- Accesando um elemento
const carros = ["Renegade", "Toro", "Ranger"];
let x=carros[0];
alert(x);

-Alterando um elemento
const carros = ["Renegade", "Toro", "Ranger"];
let x=carros[0];
alert(x);
carros [0] ="Onix";
x=carros [0];
alert(x);

-Acessando todo o vetor
const carros = ["Renegade", "Toro", "Ranger"];
alert (carros);

- Declarando nomes para os construtores
const pessoa = {primeiroNome:"José", Endereco:"Rua X", Idade:46};
alert(pessoa.Endereco);

- Métodos array - para chamar um método é semre -nome do array.metodo();
const frutas = ["Banana", "Maça", "Pera", "Uva"];
alert (frutas);
frutas.push("Melancia");
alert (frutas.join(", "));//separa os elementos

- pop - remove o último elemento | shift - remove o primeiro | unshift - acrescenta no começo da lista
splice - acrescenta um elemento no meio da lista, você decide a posição e se algum elemento será excluido
exemplo: frutas.splie(2,0,"Morango" "Kiwi"); 

sort - ordem alfabética String - crescente Number ALTERA O VETOR
const verduras = ["couve", "cenoura"];
const comidas = frutas.concat(verduras);//Uni dois vetores (igual ao Excel)
alert(comidas)*/

//- Percorrer o vetor
const comidas = ["Banana", "Maça", "Pera", "Uva", "Cenoura", "Batata"];
let listaComidas = "";

for (let i=0; i<comidas.length; i++){
        listaComidas+=comidas[i] + "<br>";
}
document.getElementById("saida").innerHTML=listaComidas;

//foreach (chama uma função criada) 
function criarLista (itemVetor){
    listaComidas+=itemVetor
}
comidas.forEach(criarListas);
document.getElementById("saida").innerHTML=listaComidas;



