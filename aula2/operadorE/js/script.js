let login = prompt("Digite o seu Login: ");
let senha = prompt("Digite a sua senha: ");
//Para permitir o login, deve-se entrar com as credênciais 
//Login: ADMIN - Senha: admin123

if(login=="ADMIN" && senha=="admin123"){
    alert("Acesso permitido!");
}else{
    alert("Acesso Negado");
}