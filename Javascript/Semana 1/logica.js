 let lado1 = parseInt(prompt("lado 1 medida: "))
 let lado2 = parseInt(prompt("lado 2 medida: "))
 let lado3 = parseInt(prompt("lado 3 medida: "))

 let suma = lado1 + lado2;
 if (suma >= lado3) {
   if (lado1 === lado2 && lado1 === lado3) {
     console.log("Es un triangulo Equilatero");   } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
     console.log("Es un triangulo Isosceles");
   } else {
     console.log("Es un triangulo Escaleno");
   }
 }else{
     console.error("No es un triangulo valido")
 }

 let frutas=["fresa", "manzana", "naranja", "sandia"]
 let primero = frutas.shift();
 console.log(primero)

 let numeros=[1,2,3,4,5]
 console.log(numeros);
 let numero_final = numeros.push(24);
 console.log(numeros);

 let palabras=["Mauricio","Maracaibo","Mardicion","Manolete"]
 console.log(palabras);
 let principio = palabras.unshift("Mardito");
 console.log(palabras);

 let colores=["Negro","Blanco","Azul","Naranjado"]
 console.log(colores)
 let ultimo = colores.pop()
 console.log(colores);

 let extraido = colores[1];
 console.log(extraido)

 let listanumeros = [1,2,3,4,5,6,7,8,9,10]
 console.log(listanumeros); let extraidos = listanumeros.slice(0,5)
 console.log(extraidos);

 console.log(palabras)
 palabras.splice(1, "Chamos")
 console.log(palabras)

 let palabras_list = ["La","Venganza","De","Los","Chamos", 2 ,"Chavez","La","Resureccion"]
 let texto_comp = palabras_list.join(" ")
 console.log(texto_comp)

 palabras_list.sort();
 console.log(palabras_list)

  palabras_list.reverse();
 console.log(palabras_list.includes("Venganza")),
 console.log(palabras_list.includes("Perrito"));

  let palabrinha = "mamagvo"
  for(const element of palabrinha ){
  console.log(element);
 }

 let str = ""
for (let i = 0; i < 6; i++){
   str += i;
}
 console.log(str);

 let palabrota = "AINO"
 for(const element in palabrota){
   console.log(`${element}: ${palabrota[element]}`);
 }

 for(const element of palabras_list){
   console.log(`Hola ${palabras_list}`)
 }

for(const element in colores){
   console.log(element)
 }

 for(const element in listanumeros){
   console.log(`${element}: ${listanumeros[element]}`);
 }

 let persona = {
   nombre: "Manolo",
   edad: 45,
   ciudad: "Caracas"
 }

 console.log(persona.ciudad)

 let libro = {
  autor: "Mauro",
   genero: "ficcion",
   paginas: 124
 }

libro.paginas = 150
 console.log(libro.paginas)

 let auto = {
   marca: "toyota",
   año: 2004
 }
 console.log(auto)
 auto.color = "Negro";
 console.log(auto)

 let estudiante = {
   genero: "masculino",
   universidad: "Udea",
   etnia: "indio"
 }

 for(const element in estudiante){
   console.log(`${element}: ${estudiante [element]}`);
}
 let nombresillo = prompt("Ingresa tu nombre");
function saludar(nombresillo) {
  console.log(`Hola, ${nombresillo}!`);
 }
 saludar(nombresillo);

 let suma1 = parseInt(prompt("Dame un numero para sumarlo"));
 let suma2 = parseInt(prompt("Dame otro numero para sumarlo"));
 function suma_completa(suma1, suma2) {
   let resultado = suma1 + suma2;
   return resultado;
 } 
 let resultado_function=suma_completa(suma1,suma2)
 console.log(resultado_function);

const esPar = prompt("Introduce un numero para saber si es par:");
function comparacion(esPar){
  if (esPar % 2 === 0) {
    alert("el numero es par");
  } else {
    alert("el numero es impar");
  }
}
comparacion(esPar)

baseRectangulo = prompt("Base del rectangulo :");
alturaRectangulo = prompt("Altura del rectangulo :");
function rectanguloarea(baseRectangulo, alturaRectangulo){
  let areaRectangulo = baseRectangulo * alturaRectangulo;
  return areaRectangulo
}
let areacompleta = rectanguloarea(baseRectangulo,alturaRectangulo)
alert(`El area del rectangulo es ${areacompleta}`);

let celsius = prompt("Que temperatura hace?");
function convertidor(celsius){
  let celsiusAFahrenheit = celsius * 1.8 + 32;
  return celsiusAFahrenheit
}
let convertido = convertidor(celsius)
console.log(convertido);
