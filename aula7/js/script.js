//HTML DOM
const elemento = document.getElementById("paragrafo1");
document.getElementById("paragrafo2").innerHTML="O Texto do primeiro paragrafo é " + elemento.innerHTML;

const element = document.getElementsByTagName("p");
document.getElementById("paragrafo2").innerHTML="O Texto do primeiro paragrafo é "
+ elemento[0].innerHTML;

//Puxando a mesma imagem da posição 1
document.getElementById("image").src="";

const image = document.getElementsByClassName("img");

//Data do dia de hoje
let data=new Date();
document.getElementById("exemplo").innerHTML="Data " + data.toLocaleDateString();