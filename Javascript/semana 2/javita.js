let colores = ["black", "white", "red", "blue"];
let colors = document.getElementById("colors");

colors.innerHTML = `<ul>`;
colores.forEach((color) => {
  colors.innerHTML += `<li>El color ${color} es muy bonito</li>`;
});
colors.innerHTML += `</ul>`;
let addColor = document.getElementById("addColor");
addColor.addEventListener("submit", (e) => {
  e.preventDefault, alert("color agregado");
});

function añadir() {
  const nuevoColor = document.getElementById("newColor");
  const valor = nuevoColor.value.trim();
  if (valor === "") {
    alert("Escribi");
    return;
  }
  console.log(valor);

  colores.push(valor);
}

let frases = [
  "Una vida que se vive sin hacer nada es lo mismo que una muerte lenta",
  "Sé el cambio que quieres ver en el mundo",
  "merequetengue",
];
const newPhrases = frases.map((frase) => `<p>${frase}</p>`);
phrase.innerHTML = newPhrases.join("");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const listNumbers = numeros.map((numero) => `<li>${numero}</li>`);
numbers.innerHTML = listNumbers.join("");

const personas = [];

let persona1 = {
  nombre: "Manolo",
  edad: 24,
  ocupacion: "Reciclador",
};

let persona2 = {
  nombre: "Chavez",
  edad: 0,
  ocupacion: "Dictador",
};

personas.push(persona1, persona2);

const person = document.getElementById("person");
let HTML = "";
personas.forEach((persona) => {
  HTML += `<div>
    <h3>
    ${persona.nombre}
    </h3>
    <p>edad ${persona.edad}</p>
    <p>ocupacion ${persona.ocupacion}</p>
</div>`;
});
person.innerHTML = HTML;

const canciones = [
  { Titulo: "Defiendete Atrevida", Artista: "Ñengo Flow", Duracion: "3:33" },
  {
    Titulo: "Time and Time Again",
    Artista: "Chronic Future",
    Duracion: "3:31",
  },
  { Titulo: "Decadence", Artista: "Disturbed", Duracion: "3:24" },
];
let song = document.getElementById("songs");
let songHtml = "";
canciones.forEach((cancion) => {
  songHtml += `<div>
    <h3>${cancion.Titulo}</h3>
    <p>Artista ${cancion.Artista}</p>
    <p>Duracion ${cancion.Duracion}</p> 
</div>`;
});
song.innerHTML = songHtml;

const productos = [
  { nombre: "arroz", precio: 4000, stock: 24 },
  { nombre: "pollo", precio: 12000, stock: 14 },
  { nombre: "morcilla", precio: 8000, stock: 12 },
];
let products = document.getElementById("products");
let productsHtml = "";
productos.forEach((producto) => {
  productsHtml += `<div>
    <ul>
    <li>${producto.nombre}</li>
    <li>Precio ${producto.precio}</li>
    <li>Stock ${producto.stock}</li>
    </ul>
    </div>`;
});
products.innerHTML = productsHtml;

let usuarios = [{ nombre: "Mauro", Correo: "mauroelanimal@hotmail.com" }];
let users = document.getElementById("users");
const newUsers = usuarios.map(
  (user) => `<div><p>${user.nombre}</p><p>${user.Correo}</p></div>`
);
users.innerHTML = newUsers.join("");

let libros = [
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: "1943" },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    año: "1605",
  },
  {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    año: "1967",
  },
];
let books = document.getElementById("books");
const newBooks = libros.map(
  (book) => `<li>${book.titulo} (${book.año}) ${book.autor}</li>`
);
books.innerHTML = newBooks;


let tareas = [
  { descripcion: "barrer", completada: true },
  { descripcion: "trapear", completada: false },
];

const realized = tareas.map((tarea) => {
    let icono = tarea.completada ? "✅" : "❌";
    return `<p>${icono} ${tarea.descripcion}</p>`;
});

document.getElementById("quest").innerHTML = realized.join("");
