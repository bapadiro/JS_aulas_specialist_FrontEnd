let n1 = parseFloat(prompt("Digite a Nota 1: "));
let n2 = parseFloat(prompt("Digite a Nota 2: "));
let n3 = parseFloat(prompt("Digite a Nota 3: "));
let media = (n1+n2+n3)/3;

if (media <4){
    document.getElementById("media").innerHTML=`Reprovado por Média: ${media}`
}
else if (media <7){
    document.getElementById("media").innerHTML= "Prova Final com Media" + media
}
else{
    document.getElementById("media").innerHTML= `Aprovado com media: ${media}`
}