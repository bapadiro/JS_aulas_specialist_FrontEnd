function calcular (){
    let raio = parseFloat(document.getElementById("raio").value);//esse modo pega-se o ID declarado no HTML
    let area = (Math.PI*Math.pow(raio,2)).toFixed(2);//toFixed (para fixar a qtd das casas decimais)
    let comprimento = (2*Math.PI*raio).toFixed(2);
    document.getElementById("resultado").innerHTML=`Área: ${area.toString()} <br> 
    Comprimento: ${comprimento.toString()}`;//esse modo mostra-se o resultado na tela HTML
}   