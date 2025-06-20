console.log("Bienvenido al Sistema interactivo de Mensajes!");
// capturar los datos
let Nombre = prompt("Ingresa tu nombre:");
let Edad = parseInt(prompt("Ingresa tu edad:"));       //convierte la edad a numeros
if (isNaN(Edad)) {
    alert("Error:Por favor, ingresa una edad valida en numeros.")
} else {
    if (Edad < 18) {        // Validar y mostrar mensaje de
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!.`);
    } else if (Edad >= 18) {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
    } else {
        console.error("Error: Por favor, ingresa una edad valida en numeros.");
        alert("Error: Por favor, ingresa una edad valida en numeros.")
    }
}
