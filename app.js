// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // 1. Obtener el campo de entrada, el nombre del amigo y el contenedor de resultados
    const inputAmigo = document.getElementById("amigo"); // Obtiene el elemento input por su ID
    const nombreAmigo = inputAmigo.value.trim().toLowerCase(); // Obtiene el valor del input, elimina espacios en blanco y convierte el nombre a minúsculas
    const resultadoDiv = document.getElementById("resultado"); // Obtiene el contenedor de resultados

    // 2. Validar si el campo de entrada está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido."); // Muestra un mensaje de alerta
        inputAmigo.value = ""; // Limpia el campo de entrada
        return; // Detiene la ejecución de la función
    }

    // 3. Validar si el nombre contiene números
    if (tieneNumeros(nombreAmigo)) {
        alert("Por favor, ingresa un nombre sin números."); // Muestra un mensaje de alerta
        inputAmigo.value = ""; // Limpia el campo de entrada
        return; // Detiene la ejecución de la función
    }

    // 4. Validar si el nombre ya existe en la lista
    if (nombreExiste(nombreAmigo)) {
        alert("Este nombre ya ha sido ingresado."); // Muestra un mensaje de alerta
        inputAmigo.value = ""; // Limpia el campo de entrada
        return; // Detiene la ejecución de la función
    }

    // 5. Agregar el nombre a la lista
    const listaAmigos = document.getElementById("listaAmigos"); // Obtiene la lista ul por su ID
    const nuevoItemLista = document.createElement("li"); // Crea un nuevo elemento li
    nuevoItemLista.textContent = capitalizarNombre(nombreAmigo); // Asigna el nombre capitalizado como el texto del nuevo elemento li
    listaAmigos.appendChild(nuevoItemLista); // Agrega el nuevo elemento li a la lista ul

    // 6. Limpiar el campo de entrada y el contenedor de resultados
    inputAmigo.value = ""; // Limpia el campo de entrada
    resultadoDiv.innerHTML = ""; // Limpia el contenedor de resultados para borrar el resultado anterior
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // 1. Obtener la lista de amigos y el contenedor de resultados
    const listaAmigos = document.getElementById("listaAmigos"); // Obtiene la lista ul por su ID
    const resultadoDiv = document.getElementById("resultado"); // Obtiene el contenedor de resultados por su ID

    // 2. Validar si la lista de amigos está vacía
    if (listaAmigos.children.length === 0) {
        alert("Por favor, agrega amigos antes de sortear."); // Muestra un mensaje de alerta
        return; // Detiene la ejecución de la función
    }

    // 3. Obtener un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.children.length); // Genera un índice aleatorio válido para la lista
    const amigoSecreto = listaAmigos.children[indiceAleatorio].textContent; // Obtiene el nombre del amigo secreto usando el índice aleatorio

    // 4. Borrar la lista de amigos
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild); // Elimina el primer hijo de la lista hasta que no queden más
    }

    // 5. Limpiar el contenedor de resultados
    resultadoDiv.innerHTML = ""; // Limpia el contenido del contenedor de resultados

    // 6. Mostrar el resultado del sorteo
    const nuevoItemResultado = document.createElement("li"); // Crea un nuevo elemento li
    nuevoItemResultado.textContent = "Amigo Secreto: " + amigoSecreto; // Asigna el resultado como el texto del nuevo elemento li
    resultadoDiv.appendChild(nuevoItemResultado); // Agrega el nuevo elemento li al contenedor de resultados
}

// Función para verificar si un nombre ya existe en la lista
function nombreExiste(nombre) {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtiene la lista ul por su ID
    for (let i = 0; i < listaAmigos.children.length; i++) { // Recorre los elementos de la lista
        if (listaAmigos.children[i].textContent.toLowerCase() === nombre) { // Compara el nombre con el texto de cada elemento (en minúsculas)
            return true; // El nombre ya existe
        }
    }
    return false; // El nombre no existe
}

// Función para verificar si un nombre contiene números
function tieneNumeros(nombre) {
    return /\d/.test(nombre); // Utiliza una expresión regular para buscar dígitos en el nombre
}

// Función para capitalizar la primera letra de cada palabra en un nombre
function capitalizarNombre(nombre) {
    if (!nombre) return ""; // Si el nombre está vacío, retorna una cadena vacía

    return nombre
        .split(" ") // Divide el nombre en un array de palabras
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra
        .join(" "); // Une las palabras capitalizadas en una sola cadena
}