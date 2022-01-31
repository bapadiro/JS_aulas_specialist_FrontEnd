// <12 anos, não pode jogar
// == 12 anos, pode jogar com a permissão dos pais 
// => 12 anos, pode jogar
let idade = parseInt(prompt("Digite a sua idade: "));
if (idade <12){
    alert (`Você não pode jogar.`);
}

else if (idade == 12){
    alert (`Você pode jogar com a permissão dos pais!`);
}

else {
    alert (`Você pode jogar!`);
}