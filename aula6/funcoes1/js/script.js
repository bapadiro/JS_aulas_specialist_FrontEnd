//Quantos argumentos quiser
function frutas (){
    let texto ="";
    for(let i=0; i<arguments.length;i++){
        texto+=(arguments[i] + "\n");
    }
    alert(texto)
}

frutas("Laranja", "Maça", "Kiwi", "Mamão", "Pera");

//Retorna
function gravarAluno(nome,telefone,cidade="São Paulo"){ 
    return`${nome}, ${telefone}, ${cidade}`  

}
alert(gravarAluno("Bárbara", 11986847421,));
alert(gravarAluno("Kim", 11985852563, "Tóquio"));

//Exemplo
const pessoa={
    nome: "Bárbara",
    idade: 26
}
function exibir (x){
    alert(`${x.nome}"/n" ${x.idade}`);
}
exibir(pessoa);
