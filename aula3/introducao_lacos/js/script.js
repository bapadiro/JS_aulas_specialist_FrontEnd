function calcularTabuada(){
    let num = parseInt(document.getElementById("num").value);
    let resultado;
    let cont=1; //A contagem começa do número 1
    let result = "";
    while (cont <=10){
        resultado = num*cont; // Resultado = número X 1
        result += resultado+"<br>";
        cont++; //Sempre colocar dois sinais de ++ para acrescentar mais 1 no valor de cont (cont + cont = 1)
    }
    document.getElementById("res").innerHTML=result;
}



/*while (cont <=10){
    resultado = num*cont;
    document.write(resultado.toString() + "<br>"); //Mostrar valor no HTML sem declarar um ID
    cont++;
}

Primeiro faz-se, depois vem a condição (a condição é exucutada pelo menos 1x)
do{
    resultado = num*cont;
    document.write(resultado.toString() + "<br>");
    cont++;
}while (cont <=10);

//Se Declara tudo na mesma linha (sempre com a definição di início e do fim)
for(let cont=1; cont<= 10; cont++){
    resultado = num*cont;
    document.write(resultado.toString() + "<br>");
}*/

