console.group("Cuadrado");
// Perimetro
function perimetroCuadrado(lado) {
    return lado*4;       
}

// Área
function areaCuadrado(lado){
    return lado**2;
} 
console.groupEnd();

console.group("Triangulo");
// Perimetro 

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

// Área
function areaTringulo(base, altura){
    return (base*altura)/2;
}console.groupEnd();

console.group("Circulo");
//Perímetro

function perimetroCirculo(radio){
return 2*3.14*radio;
}

// Área 

function areaCirculo(radio) {
    return 3.14*(radio**2)
}


// Funciones Para HTML


//         CUADRADO 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)

    const resultCP = document.getElementById("ResultCP");
    resultCP.innerText = "El perímetro del cuadrado es : " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    const resultCA = document.getElementById("ResultCA");
    resultCA.innerText = "El perímetro del cuadrado es : " + area;
}

//       TRIANGULO 
function calcularPerimetroTriangulo(){
    
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputTriangulo4");
    const value3 = Number(input3.value);
    
    const perimetrot = perimetroTriangulo(value1, value2, value3);
    const resultTP = document.getElementById("ResultTP");
    resultTP.innerText = "El perímetro del triangulo es : " + perimetrot;
}

function calcularAreaTriangulo(){

    const input1 = document.getElementById("InputTriangulo4");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTriangulo3");
    const value2 = Number(input2.value);

    const area = areaTringulo(value1,value2);
    const resultTA = document.getElementById("ResultTA");
    resultTA.innerText = "El área del triangulo es : " + area;

}

// CIRCULO 

function calcularPerimetroCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const valor1 = Number(input1.value);

    const perimetrocir = perimetroCirculo(valor1);
    const resultCP = document.getElementById("ResultCirP");
    resultCP.innerText = "El perímetro del circulo es : " + perimetrocir;
}

function calcularAreaCirculo() { 
    const radio2 = document.getElementById("InputCirculo");
    const valor2 = radio2.value;

    const areacir = areaCirculo(valor2);
    const resultCA = document.getElementById("ResultCirA");
    resultCA.innerText = "El área del circulo es : " + areacir;
}


function alturaTriangulo(lado1, base){
    
    return h = Math.sqrt(lado1**2 - base**2/4)
}

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputIsotriangulo");
    const value1 = Number(input1.value);
    
    const input2 = document.getElementById("InputIsotriangulo1");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputIsotriangulo2");
    const value3 = Number(input3.value);
    
    const altura = alturaTriangulo(value1, value2, value3);
    const resultTAA = document.getElementById("ResultTAA");
    resultTAA.innerText = "La altura del triangulo es : " + altura;

}