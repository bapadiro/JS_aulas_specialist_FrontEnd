function calcular(){
    let n1 = parseInt(document.getElementById("n1").value);//esse cód é declarado sempre dentro da função
    let n2 = parseInt(document.getElementById("n2").value);
    let = res=0;
    if(n1<n2){
        for(let cont=n1+1; cont<n2; cont++);{
            res=res+cont;  
        // for não incrementar o contador  
        }
        document.getElementById("result").innerHTML=res;toString();//Fim do laço de repetição, Aparecer na tela web o let res, que é o resultado 
        //do while, toString para converter em String
    } 
    else{
        document.getElementById("result").innerHTML="O primeiro número deve ser menor que o segundo."
        //esse cód é declarado sempre como resultado final, aparecerá na tela web.
    }
}