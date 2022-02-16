function efetuarLogin (){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login=="ADM" && senha=="123"){
        document.getElementById("msg").innerHTML= "<font color=#00ff00>Seja Bem-Vindo</font>"
    }
    else{
        document.getElementById("msg").innerHTML= "<font color=#FF0000>Acesso Inválido!</font>"
    }
}