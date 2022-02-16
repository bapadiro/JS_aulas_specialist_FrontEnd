//-Sem parametro
paracelSius();
function paraCelsius(){
    let f=80;
    let c=(5/9)*(f-32);
    alert(`Temperatura em graus C= ${c.toString()}`);
}

//-Com parametro
paraCelsius(80);
function paraCelsius (f){
    let c=(5/9)*(f-32);
    alert(`Temperatura em graus C= ${c.toString()}`);
}

//- Usuário Digitando - Aparecendo na tela HTML
function paraCelsius (f){
    let c=(5/9)*(f-32);
    alert(`Temperatura em graus C= ${c.toString()}`);
}

function paraFahrenheit (c){
    let f=(c*9/5)+32;
    alert(`Temperatura em graus F= ${f.toString()}`);
}

function principal(){
    let temp=parseFloat(document.getElementById("grausF").value);
    let escala=document.getElementById("escala").value;

    if(escala=="F"){
        paraCelsius(temp);
    }
    else{
        paraFahrenheit(temp);
    }
    
}

//- Com return
function paraCelsius (f){
    let c=(5/9)*(f-32);
    return c;
}

function paraFahrenheit (c){
    let f=(c*9/5)+32;
    return f;
}

function principal(){
    let temp=parseFloat(document.getElementById("grausF").value);
    let escala=document.getElementById("escala").value;
    let tempConvertida=0;

    if(escala=="F"){
        tempConvertida=paraCelsius(temp);
        alert(`Temperatura em graus C= ${tempConvertida.toString()}`);
    }
    else{
        tempConvertida=paraFahrenheit(temp);
        alert(`Temperatura em graus F= ${tempConvertida.toString()}`);
    }
    
}

