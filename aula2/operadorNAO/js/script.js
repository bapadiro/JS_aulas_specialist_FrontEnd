//Leia um login e se estenão for o administrador exiba a msg
//"SEM PODERES ADM"

let usuario = prompt("Usuário: ");
if(!(usuario=="administrador")){
    alert("Sem poderes administrativos");
}else{
    alert(`Olá Administrador`);
}