let kmInicio = parseFloat(prompt("Digita o KM inicial: "));
let kmFim = parseFloat(prompt("Digite o KM final: "));
let litros = parseFloat(prompt("Digita quantos litros foram abastecidos: "));

alert (`Média KM por litro: ${(kmFim-kmInicio)/litros}`);