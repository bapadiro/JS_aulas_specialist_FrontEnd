//Ex 1
const nomesA = ["Barbara", "Thiago", "Kim", "Kucas", "Mia"];
const nomesB = ["Negan", "Rick", "Daryl", "Carol", "Megie"];
const nomesAB = nomesA.concat(nomesB);
alert(nomesAB);

//Ex2
const nomes = ["Barbara", "Thiago", "Kim", "Kucas", "Mia","Negan", "Rick", "Daryl", "Carol", "Megie"]
const nomesB=nomes.slice(5);//a partir da 5º posicao e não do indice 5
alert(nomesB);

//Ex3
const valores = [1,2,3,4,5,6,7,8,9,10];
valores.reverse();
alert(valores);