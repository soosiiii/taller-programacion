function ej1(){
    let rango1=0;
    let rango2=0;
    let rango3=0;
    let num=parseInt(prompt("ingrese un numero"));

    if(isNaN(num)){
        console.log("dato invalido");
        return;
    }
    while(num!==0){
        if(isNaN(num)){
            console.log("dato invalido");
            return;
        }
        if(num>=1 && num<=50){
            rango1++;
        } else if(num>=51 && num<=100){
            rango2++;
        } else {
            rango3++;
        }
        num=parseInt(prompt("ingrese otro numero"));
    }
    console.log("de 1 a 50: " + rango1)
    console.log("de 51 a 100: " + rango2)
    console.log("mayores de 100: " + rango3)
}

function ej2(){
    let sumaPares=0;
    let contadorPares=0;
    let impares=0;

    for(let i=1; i<=10; i++){
        let num=parseInt(prompt("ingrese un numero"));
        if(isNaN(num)){
            console.log("datos invalidos");
            return;
        }
        if(num%2===0){
            sumaPares=sumaPares+num;
            contadorPares++;
        } else {
            impares++;
        }
    }
    let promedio=sumaPares/contadorPares;
    console.log("promedio pares: " + promedio)
    console.log("cantidades de impares: " + impares)
}

function ej3(){
    let mayorNegativo;
    let positivos=0;
    let num=parseInt(prompt("ingrese un numero"));

    if(isNaN(num)){
        console.log("dato invalido");
        return;
    }
    while(num!==0){
        if(num>0){
            positivos++;
        } else if (num<0){
            if(mayorNegativo===undefined || num>mayorNegativo){
                mayorNegativo=num;
            }
        }
        mayorNegativo==undefined
        num>mayorNegativo
    }
}