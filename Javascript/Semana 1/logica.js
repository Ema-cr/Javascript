let lado1 = parseInt(prompt("lado 1 medida: "))
let lado2 = parseInt(prompt("lado 2 medida: "))
let lado3 = parseInt(prompt("lado 3 medida: "))

let suma = lado1 + lado2;
if (suma >= lado3) {
  if (lado1 === lado2 && lado1 === lado3) {
    console.log("Es un triangulo Equilatero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Es un triangulo Isosceles");
  } else {
    console.log("Es un triangulo Escaleno");
  }
}else{
    console.error("No es un triangulo valido")
}
