let l1 = parseInt(prompt("Digite o primeiro lado: "));
let l2 = parseInt(prompt("Digite o segundo lado: "));
let l3 = parseInt(prompt("Digite o terceiro lado: "));

//checar se os valores formam um triangulo

if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2){
    if(l2 == l2 && l2 == l3){
        document.getElementById("saida").innerHTML="Triangulo EquilÁtero.";
    }
    else if(l1 != l2 && l1!=l3 && l2!=l3){
        document.getElementById("saida").innerHTML="Triangulo Escaleno.";
    }
    else{
        document.getElementById("saida").innerHTML="Triangulo Isósceles";
    }
}
else{
    document.getElementById("saida").innerHTML="Os valores informados, não forma um triangulo.";
}