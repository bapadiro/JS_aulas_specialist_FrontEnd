function fatorial(){
    let num = parseInt(document.getElementById("valor").value);
    let fat;
    let cont=1;
    while (cont <= num){
        fat = fat*cont;
        cont++;
    }document.getElementById("fat").innerHTML=fat.toString();
}
