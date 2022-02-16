let idade = parseInt(prompt("Digite a sua Idade: "));
alert (verificarIdade (idade));

function verificarIdade (idade){
    if (idade<18){
        return "Você é Menor de Idade!"
    }
    else{
        return "Você é Maior de idade!"
    }
}
