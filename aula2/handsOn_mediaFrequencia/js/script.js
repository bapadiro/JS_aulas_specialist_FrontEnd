let nota1 = parseFloat(prompt("Digite a nota 1:" ));
let nota2 = parseFloat(prompt("Digite a nota 2:" ));
let media = (nota1+nota2)/2;
let dadas = parseInt(prompt("Digite a qnt de aulas dadas: "));
let assistidas = parseInt(prompt("Digite a qnt de aulas assistidas: "));
let freq = (assistidas/dadas)*100;

if(media >= 7 && freq >= 75){
    document.getElementById("situacao").innerHTML=`Aprovado com média ${media} e frequência de ${freq}%`;
}
else{
    document.getElementById("situacao").innerHTML=`Reprovado com ${media} e frequência ${freq}%.`;
}
