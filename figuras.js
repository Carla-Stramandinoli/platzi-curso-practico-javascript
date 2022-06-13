//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado =  5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return  lado * lado;
}  
areaCuadrado();
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Codigo del triángulo
console.group("Triangulos");
//const ladoTriangulo1 =  6;
//const ladoTriangulo2 =  6;
//const baseTriangulo =  4;

//console.log(
//    "Los lados del triangulo miden: " 
//    + ladoTriangulo1 + "cm, " 
//    + ladoTriangulo2 + "cm, " 
//    + baseTriangulo + "cm"
//);

//const alturaTriangulo =  5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
} 
//console.log("El perimetro del triángulo es: " + perimetroTriangulo+ "cm");
function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El area del triángulo es: " + areaTriangulo + "cm2");
console.groupEnd();

//Codigo del circulo
console.group("Circulos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es de: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

//Pi
const PI = Math.PI;
console.log("PI es : " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
console.log("El perimetro del circulo es de: " + perimetroCirculo(4) + "cm");

//Area
function areaCirculo(radio){
    return (radio * radio) * PI
}
//console.log("El area del circulo es de: " + areaCirculo + "cm2");

console.groupEnd();



//Aqui interactuamos con el HTML.
//Cuadrado.
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const  lado1 = document.getElementById("Lado1");
    const  lado2 = document.getElementById("Lado2");
    const  base = document.getElementById("Base");

    const valueTrianguloLado1 = lado1.value;
    const valueTrianguloLado2 = lado2.value;
    const valueTrianguloBase = base.value;

    const perTriangulo = perimetroTriangulo(valueTrianguloLado1, valueTrianguloLado2, valueTrianguloBase);
    alert(perTriangulo);
}
function calcularAreaTriangulo(){
    const areaT = document.getElementById("Lado1");
    const alturaT = document.getElementById("Altura");

    const valueAreaTrianguloLado1 = areaT.value;
    const valueAlturaTriangulo = alturaT.value;

    const areaTriangulo1 = areaTriangulo(valueAreaTrianguloLado1, valueAlturaTriangulo);
    alert(areaTriangulo1);
}
//Calcular la altura de un triangulo isoceles.
function calcularAlturaTriangulo(){
    let l = document.getElementById("Lado1");
    let b = document.getElementById("Base");

     l = l.value;
     b = b.value;
    
    const respuestaAlturaTriangulo = Math.sqrt((l * l) - ((b * b) / 4));

    alert(respuestaAlturaTriangulo);
}
//Circulo
function calcularPerimetroCirculo(){
    const radioC = document.getElementById("Radio");

    const valueradioC = radioC.value;

    const diamCirculo1 = perimetroCirculo(valueradioC);
    alert(diamCirculo1);
}

function calcularAreaCirculo(){
    const area = document.getElementById("Radio");
    const valueAreaCirculo = area.value;

    const arCirculo = areaCirculo(valueAreaCirculo);
    alert(arCirculo);
}
