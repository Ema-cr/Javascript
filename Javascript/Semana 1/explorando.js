// Declaramos una variable con un nombre y mostramos un saludo en consola usando template literals.
let nombre = "emanuel";
console.log(`Hola,  ${nombre}`);

// Declaramos una variable con un número entero y lo mostramos.
let entero = 1;
console.log(entero);

// Declaramos una variable con un número decimal y lo mostramos.
let decimal = 2.5;
console.log(decimal);

// Declaramos una variable con un texto (string) y lo mostramos.
let texto = "Flama";
console.log(texto);

// Declaramos una constante llamada PI (valor fijo, no se puede cambiar) y la mostramos.
const PI = 3.1416;
console.log(PI);

// Si intentáramos cambiar el valor de PI, JavaScript lanzaría un error, por eso esta línea está comentada.
// PI = 3.9586;
// console.log(PI)

// Variable vacía (string vacío).
let klk = "";
console.log(klk);

// Variable con valor nulo (intencionalmente sin valor).
let aino = null;
console.log(aino);

// Variable booleana (verdadero).
let verdadero = true;

// Pedimos al usuario su edad con prompt y la mostramos con template literal.
let edad = prompt("¿Cuál es tu edad?");
console.log(`Tienes ${edad} años`);

// Mostramos un mensaje de bienvenida con una alerta.
alert("¡Bienvenid@ a nuestra página!");

// Preguntamos si desea continuar con una ventana de confirmación y mostramos el resultado.
let deseasContinuar = confirm("¿Deseas continuar?");
console.log(deseasContinuar);

// Operaciones matemáticas básicas con dos números.
let numero1 = 24;
let numero2 = 4;

console.log("suma", numero1 + numero2);             // Suma
console.log("resta", numero1 - numero2);            // Resta
console.log("multiplicacion", numero1 * numero2);   // Multiplicación
console.log("division", numero1 / numero2);         // División
console.log("modulo", numero1 % numero2);           // Módulo (residuo)

// Concatenación de textos (strings).
let saludo = "Hola";
let nombresinho = "Emanuel";
let mensaje = saludo + " " + nombresinho;
console.log(mensaje);

// Comparaciones
console.log(5 == "5");   // true: comparación débil (solo valor)
console.log(5 === "5");  // false: comparación estricta (valor y tipo)

// Operadores lógicos
console.log(true && false); // false: ambos deben ser verdaderos
console.log(false || true); // true: al menos uno debe ser verdadero
console.log(!true);         // false: negación

// Condicional que evalúa si el número ingresado es menor, mayor o igual a 10
let numero_user = prompt("Cual es tu numero?");
if (numero_user < 10){
    console.log('Es menor');
} else if (numero_user > 10){
    console.log('Es mayor');
} else{
    console.log('Es igual');
}

// Condicional que evalúa el nombre de usuario ingresado
let user = prompt("Cual es tu nombre de usuario?");
if (user === "Admin"){
    console.log('Bienvenido Admin eres el mejor');
} else{
    console.log('Bienvenido random');
}

// Operador ternario: si el número ingresado es par o impar
let resultado = prompt('Ingresa tu numero');
let division = (resultado % 2 === 0) ? "es par" : "es impar";
console.log(division);

// Tipos de mensajes en la consola
console.info("Este es el .info");   // Información general
console.warn("Este es el .warn");   // Advertencia
console.error("Este es un mensaje de error");  // Error

// Agrupamos mensajes en la consola
console.group("Grupo de mensajes");
console.log("Este es el 1rooo");
console.log("Este es el 2dooooo");
console.groupEnd();
console.time("Tiempo de ejecución");
console.timeEnd("Tiempo de ejecución");

let nombrinho = prompt("Cual es tu nombre?")
let edadinha = prompt("Cuantos años tienes?")
let ciudad = prompt("De que ciudad eres?")
console.log(`Hola ${nombrinho}, tienes ${edadinha} años y vives en ${ciudad}`)
