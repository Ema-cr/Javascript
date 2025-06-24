let colores = ['black', 'white', 'red','blue']
let colors = document.getElementById('colors')

colors.innerHTML= `<ul>`
colores.forEach(color =>{
    colors.innerHTML += `<li>El color ${color} es muy bonito</li>`
})
colors.innerHTML+=`</ul>`
 let addColor = document.getElementById('addColor')
 addColor.addEventListener('submit', e=>{
     e.preventDefault,
     alert('color agregado')
 }  
 )

function añadir(){
    const nuevoColor = document.getElementById('newColor')
    const valor =nuevoColor.value.trim()
    if (valor === ""){
        alert("Escribi")
        return
    }
    console.log(valor)
    
    colores.push(valor)  
}

let frases = ['Una vida que se vive sin hacer nada es lo mismo que una muerte lenta','Sé el cambio que quieres ver en el mundo','merequetengue']
const newPhrases = frases.map(frase => `<p>${frase}</p>`)
phrase.innerHTML=newPhrases.join('')

let numeros = [1,2,3,4,5,6,7,8]
const listNumbers = numeros.map(numero => `<li>${numero}</li>`)
numbers.innerHTML=listNumbers.join('')

const personas=[]

let persona1 = {
    nombre : 'Manolo',
    edad : 24,
    ocupacion : 'Reciclador'
}

let persona2 = {
    nombre : 'Chavez',
    edad : 0,
    ocupacion : 'Dictador'
}


personas.push(persona1,persona2);

let person = document.getElementById('person')

person.innerHTML = `<li>`
person.innerHTML += `<h1> Usuarios </h1>`

person.forEach(personas){
    person.forEach
}