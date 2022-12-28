//Ejercicio 1
function hora(){
    let mostrar = document.getElementById('mostrar1');
    let imprimir = document.getElementById('imprimir1');
    let segundos = prompt("Ingrese la cantidad de horas");
    let calculo = segundos*60*60;
    console.log(calculo + "sec")

    mostrar.innerHTML = "Horas: " + segundos;
    imprimir.innerHTML= "Segundos en " + segundos + " horas: " + calculo + "sec";
}

//Ejercicio 2
function radio(){
    let mostrar = document.getElementById('mostrar2');
    let imprimir = document.getElementById('imprimir2');

    let radio = prompt("Ingrese el Radio del Circulo");
    let area = (radio*radio*Math.PI).toFixed(2);
    let longitud = (2*Math.PI*radio).toFixed(2);

    mostrar.innerHTML = "Radio Ingresado: " + radio;
    imprimir.innerHTML= "El Area es: " + area + "<br>La Longitud es: " + longitud;
}

//Ejercicio 3
function hombreMujeres(){
    let mostrar = document.getElementById('mostrar3');
    let imprimir = document.getElementById('imprimir3');

    let hombre = prompt("Ingrese La cantidad de Hombre que hay");
    let mujeres = prompt("Ingrese La cantidad de Mujeres que hay");
    hombre = Number(hombre);
    mujeres = Number(mujeres);
    let totales = hombre + mujeres;

    mostrar.innerHTML = "Totales: " + totales + "<br>Hombre: " + hombre + "<br>Mujeres: " + mujeres;

    hombre = totales/(hombre*100)

    imprimir.innerHTML= "Hombre: " + hombre + "%";
}

//Ejercico 4
function cuestionarios(){
    let mostrar = document.getElementById('mostrar4');
    let imprimir = document.getElementById('imprimir4');
    
    let A = prompt("Ingrese la Cantidad de Pruebas tipo A");
    let B = prompt("Ingrese la Cantidad de Pruebas tipo B");
    let C = prompt("Ingrese la Cantidad de Pruebas tipo C");

    A = Number(A);
    B = Number(B);
    C = Number(C);

    A *= 5;
    B *= 8;
    C *= 6;

    let min = A+B+C;
    let horas = Math.floor(min/60); 
    min = min - (horas*60);
    mostrar.innerHTML = "Se tardara:<br><br>Horas: " + horas + "h";
    imprimir.innerHTML= "Minutos: " + min + "min";
}

//Ejercicio 5
function descuento(){
    let mostrar = document.getElementById('mostrar5');
    let imprimir = document.getElementById('imprimir5');

    let compra = prompt("Ingrese la cantidad de su compra: ");

    compra -= compra * 0.15;
    
    mostrar.innerHTML = "Su compra tiene un 15% de descuento";
    imprimir.innerHTML= "Su total es: " + compra + "$";
}

//Ejercicio 6
function nota(){
    let mostrar = document.getElementById('mostrar6');
    let imprimir = document.getElementById('imprimir6');

    let cal1 = prompt("Ingresa la nota de tu primera calificación");
    let cal2 = prompt("Ingresa la nota de tu segunda calificación");
    let cal3 = prompt("Ingresa la nota de tu tercera calificación");
    cal1 = Number(cal1);
    cal2 = Number(cal2);
    cal3 = Number(cal3);
    let por1 = ((cal1+cal2+cal3)/3)*0.55;
    let por2 = prompt("Ingresa la nota de tu examen final");
    por2 *=0.30;
    let por3 = prompt("Ingresa la nota de tu trabajo final");
    por3 *=0.15;
    let nota = por1+por2+por3;
    
    mostrar.innerHTML = "Su nota final es: " + nota.toFixed(2);
    imprimir.innerHTML= "";
}

//Ejercicio 7
function par(){
    let mostrar = document.getElementById('mostrar7');
    let imprimir = document.getElementById('imprimir7');
    let num = prompt("Ingrese un numero: ");

    if((num%2) == 0){
        mostrar.innerHTML = "El numero es Par";
    } else {
        mostrar.innerHTML = "El numero es Impar";
    }
    imprimir.innerHTML= "";
}

//Ejercicio 8
function aprobar(){
    let mostrar = document.getElementById('mostrar8');
    let imprimir = document.getElementById('imprimir8');
    let nota1 = prompt("Ingresa la Primera Calificación:");
    let nota2 = prompt("Ingresa la Segunda Calificación:");
    let nota3 = prompt("Ingresa la Tercera Calificación:");
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    let nota = (nota1+nota2+nota3)/3;

    if(nota >=70){
        mostrar.innerHTML= "Tu nota es: " + nota;
        imprimir.innerHTML = "Estas Aprobado";
    } else{
        mostrar.innerHTML= "Tu nota es: " + nota;
        imprimir.innerHTML = "Estas Reprobado";
    }
}

//Ejercicio 9
function descuentoAlmacen(){
    let mostrar = document.getElementById('mostrar9');
    let imprimir = document.getElementById('imprimir9');
    let descuento = prompt("Ingrese la cantidad de su compra");
    descuento=Number(descuento);

    if(descuento >= 100){
        descuento-=descuento*0.20;
        mostrar.innerHTML= "Obtienes un 20% de descuento";
        imprimir.innerHTML = "Su compra es: "  + descuento;
    } else {
        mostrar.innerHTML= "No obtienes descuento";
        imprimir.innerHTML = "Su compra es: " + descuento;
    }
}

//Ejercicio 10
function diferencia(){
    let mostrar = document.getElementById('mostrar10');
    let imprimir = document.getElementById('imprimir10');

    let num1 = prompt("Ingresa el Primer Numero");
    let num2 = prompt("Ingresa el Segundo Numero");
    num1 = Number(num1);
    num2 = Number(num2);

    if(num1 == num2){
        num1*=num2;
        mostrar.innerHTML= "Los numero son iguales";
        imprimir.innerHTML = "El resultado es:" + num1;
    } 
    else if(num1>num2){
        num1-=num2;
        mostrar.innerHTML= "El numero 1 es mayor que numero 2";
        imprimir.innerHTML = "El resultado es:" + num1;
    }
    else {
        num1+=num2;
        mostrar.innerHTML= "Los numero no iguales";
        imprimir.innerHTML = "El resultado es:" + num1;
    }
}


//Ejercicio 11
function mayor(){
    let mostrar = document.getElementById('mostrar11');
    let imprimir = document.getElementById('imprimir11');

    let num1 = prompt("Ingresa un numero");
    let num2 = prompt("Ingresa un numero");
    let num3 = prompt("Ingresa un numero");

    if(num1 > num2 && num1 > num3){
        mostrar.innerHTML= "El Numero 1 es mayor";
        imprimir.innerHTML = "El resultado es: " + num1;
    } 
    else if(num2 > num1 && num2 > num3){
        mostrar.innerHTML= "El Numero 2 es mayor";
        imprimir.innerHTML = "El resultado es: " + num2;
    }
    else {
        mostrar.innerHTML= "El Numero 3 es mayor";
        imprimir.innerHTML = "El resultado es: " + num3;
    }
}

//Ejercicio 12
function manzana(){
    let mostrar = document.getElementById('mostrar12');
    let imprimir = document.getElementById('imprimir12');

    let kilo = prompt("Ingrese los kilos de manzana");
    kilo = Number(kilo);

    if(kilo<=2){
        mostrar.innerHTML= "Compro: " + kilo + " de manzana";
        imprimir.innerHTML = "No tiene descuento";
    }
    else if(kilo>=2.01 && kilo<=5){
        mostrar.innerHTML= "Compro: " + kilo + " de manzana";
        kilo-=kilo*0.10;
        imprimir.innerHTML = "Tiene un descuento del 10%: " + kilo.toFixed(2) + "$";
    }
    else if(kilo>=5.01 && kilo<=10){
        mostrar.innerHTML= "Compro: " + kilo + " de manzana";
        kilo-=kilo*0.15;
        imprimir.innerHTML = "Tiene un descuento del 15%: " + kilo.toFixed(2) + "$";
    }
    else {
        mostrar.innerHTML= "Compro: " + kilo + " de manzana";
        kilo-=kilo*0.20;
        imprimir.innerHTML = "Tiene un descuento del 20%: " + kilo.toFixed(2) + "$";
    }
}

//Ejercicio 13
function dias(){
    let mostrar = document.getElementById('mostrar13');
    let imprimir = document.getElementById('imprimir13');
    let dia = prompt("Ingrese un numero");
    dia = Number(dia);

    switch(dia){
        case 1:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Lunes";
            break;
        case 2:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Martes";
            break;
        case 3:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Miercoles";
            break;
        case 4:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Jueves";
            break;
        case 5:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Viernes";
            break;
        case 6:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Sabado";
            break;
        case 7:
            mostrar.innerHTML= "El numero es: " + dia;
            imprimir.innerHTML = "Hoy es Domingo";
            break;
        default:
            mostrar.innerHTML= "El numero " + dia + " no es valido";
            imprimir.innerHTML = "";
            break;
    }
}

//Ejercicio 14
function aniversario(){
    let mostrar = document.getElementById('mostrar14');
    let imprimir = document.getElementById('imprimir14');
    let año = prompt("Ingrese un numero");
    año = Number(año);

    switch(año){
        case 10:
            mostrar.innerHTML= "Los " + año + " de Aniversario son:";
            imprimir.innerHTML = "Aniversario de Hojalata";
            break;
        case 20:
            mostrar.innerHTML= "El numero es: " + año + " de Aniversario son:";
            imprimir.innerHTML = "Aniversario de Porcelana";
            break;
        case 30:
            mostrar.innerHTML= "El numero es: " + año + " de Aniversario son:";
            imprimir.innerHTML = "Aniversario de Perlas";
            break;
        case 40:
            mostrar.innerHTML= "El numero es: " + año + " de Aniversario son:";
            imprimir.innerHTML = "Aniversario de Rubi";
            break;
        case 50:
            mostrar.innerHTML= "El numero es: " + año + " de Aniversario son:";
            imprimir.innerHTML = "Aniversario de Oro";
            break;
        case 60:
            mostrar.innerHTML= "El numero es: " + año + " de Aniversario son:"
            imprimir.innerHTML = "Aniversario de Diamante";
            break;
        default:
            mostrar.innerHTML= "No es ninguno";
            imprimir.innerHTML = "";
            break;
    }
}

//Ejercicio 15
function opcion1(){
    let mostrar = document.getElementById('mostrar15');
    let imprimir = document.getElementById('imprimir15');

    let numero2 = prompt("Ingresa un numero");
    let potencia = prompt("Ingresa la potencia");
    let elevado = Math.pow(numero2,potencia)

    mostrar.innerHTML= "Opcion 1:";
    imprimir.innerHTML = "El resultado es: " + elevado;
}

function opcion2(){
    let mostrar = document.getElementById('mostrar15');
    let imprimir = document.getElementById('imprimir15');

    let numero = prompt("Ingresa un numero");
    let raiz = Math.sqrt(numero)

    mostrar.innerHTML= "Opcion 2:";
    imprimir.innerHTML = "El resultado es: " + raiz.toFixed(2);
}

function opcion3(){
    let mostrar = document.getElementById('mostrar15');
    let imprimir = document.getElementById('imprimir15');

    mostrar.innerHTML= "Opcion 3:";
    imprimir.innerHTML = "Salir";
}

//Ejercicio 16
function sumaN(){
    let mostrar = document.getElementById('mostrar16');
    let imprimir = document.getElementById('imprimir16');

    let num = prompt("Ingresa un numero");
    let res = 0;

    for(let i = 0; i <= num; i++){
        res = res + i;
    }

    mostrar.innerHTML= "Suma de N";
    imprimir.innerHTML = "El resultado es: " + res;
}

//Ejercicio 17
function sumaParImpar(){
    let mostrar = document.getElementById('mostrar17');
    let imprimir = document.getElementById('imprimir17');

    let par = 0;
    let impar = 0;

    for(let i = 0; i<50; i++){
        if((i%2)==0){
            par +=i;
        } else {
            impar +=i;
        }
    }

    mostrar.innerHTML= "Numeros par: " + par;
    imprimir.innerHTML = "Numeros impar: " + impar;
}

function borrar(){
    let mostrar1 = document.getElementById('mostrar1');
    let mostrar2 = document.getElementById('mostrar2');
    let mostrar3 = document.getElementById('mostrar3');
    let mostrar4 = document.getElementById('mostrar4');
    let mostrar5 = document.getElementById('mostrar5');
    let mostrar6 = document.getElementById('mostrar6');
    let mostrar7 = document.getElementById('mostrar7');
    let mostrar8 = document.getElementById('mostrar8');
    let mostrar9 = document.getElementById('mostrar9');
    let mostrar10 = document.getElementById('mostrar10');
    let mostrar11= document.getElementById('mostrar11');
    let mostrar12 = document.getElementById('mostrar12');
    let mostrar13 = document.getElementById('mostrar13');
    let mostrar14 = document.getElementById('mostrar14');
    let mostrar15 = document.getElementById('mostrar15');
    let mostrar16 = document.getElementById('mostrar16');
    let mostrar17 = document.getElementById('mostrar17');
    let imprimir1 = document.getElementById('imprimir1');
    let imprimir2 = document.getElementById('imprimir2');
    let imprimir3 = document.getElementById('imprimir3');
    let imprimir4 = document.getElementById('imprimir4');
    let imprimir5 = document.getElementById('imprimir5');
    let imprimir6 = document.getElementById('imprimir6');
    let imprimir7 = document.getElementById('imprimir7');
    let imprimir8 = document.getElementById('imprimir8');
    let imprimir9 = document.getElementById('imprimir9');
    let imprimir10 = document.getElementById('imprimir10');
    let imprimir11 = document.getElementById('imprimir11');
    let imprimir12 = document.getElementById('imprimir12');
    let imprimir13 = document.getElementById('imprimir13');
    let imprimir14 = document.getElementById('imprimir14');
    let imprimir15 = document.getElementById('imprimir15');
    let imprimir16 = document.getElementById('imprimir16');
    let imprimir17 = document.getElementById('imprimir17');

    mostrar1.innerHTML = "";
    mostrar2.innerHTML = "";
    mostrar3.innerHTML = "";
    mostrar4.innerHTML = "";
    mostrar5.innerHTML = "";
    mostrar6.innerHTML = "";
    mostrar7.innerHTML = "";
    mostrar8.innerHTML = "";
    mostrar9.innerHTML = "";
    mostrar10.innerHTML = "";
    mostrar11.innerHTML = "";
    mostrar12.innerHTML = "";
    mostrar13.innerHTML = "";
    mostrar14.innerHTML = "";
    mostrar15.innerHTML = "";
    mostrar16.innerHTML = "";
    mostrar17.innerHTML = "";

    imprimir1.innerHTML = "";
    imprimir2.innerHTML = "";
    imprimir3.innerHTML = "";
    imprimir4.innerHTML = "";
    imprimir5.innerHTML = "";
    imprimir6.innerHTML = "";
    imprimir7.innerHTML = "";
    imprimir8.innerHTML = "";
    imprimir9.innerHTML = "";
    imprimir10.innerHTML = "";
    imprimir11.innerHTML = "";
    imprimir12.innerHTML = "";
    imprimir13.innerHTML = "";
    imprimir14.innerHTML = "";
    imprimir15.innerHTML = "";
    imprimir16.innerHTML = "";
    imprimir17.innerHTML = "";
}