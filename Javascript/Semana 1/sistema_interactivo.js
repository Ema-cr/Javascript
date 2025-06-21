// Mensaje de bienvenida en la consola del navegador
console.log("Bienvenido al Sistema interactivo de Mensajes!");

// Captura del nombre con prompt
let nombre = prompt("Ingresa tu nombre:");

// Validamos que el nombre solo contenga letras y espacios usando Unicode
const soloLetras = /^[\p{L}\s]+$/u;
if (!soloLetras.test(nombre)) {
    alert("Error: El nombre solo debe contener letras.");
} else {
    // Captura y conversión de la edad a número entero
    let edad = parseInt(prompt("Ingresa tu edad:"));

    // Verificamos si la edad no es un número válido
    if (isNaN(edad)) {
        alert("Error: Por favor, ingresa una edad válida en números.");
    } else {
        // Validamos si es menor de edad
        if (edad < 18) {
            alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
        } 
        // Validamos si es mayor o igual a 18
        else if (edad >= 18) {
            alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
        } 
        // Esta parte nunca se ejecutará realmente porque ya validamos arriba, pero se deja por seguridad
        else {
            console.error("Error: Por favor, ingresa una edad válida.");
            alert("Error: Por favor, ingresa una edad válida.");
        }
    }
}
