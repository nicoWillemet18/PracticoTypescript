"use strict";
console.log("Corriendo desde typescript");
//Ejercicio 3
const nombre = 'Bautista';
const edad = 30;
const esActivo = true;
const fechaNacimiento = new Date('1994-07-19');
// Obtener el elemento HTML donde se mostrarán los valores (suponiendo que siempre existe)
const resultadoDiv = document.getElementById('variables');
// Mostrar los valores en el HTML
resultadoDiv.innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Edad: ${edad}</p>
    <p>Activo: ${esActivo}</p>
    <p>Fecha de Nacimiento: ${fechaNacimiento.toDateString()}</p>
`;
//Ejercicio 4
function convertirNumeroACadena(numero) {
    return numero.toString();
}
function mostrarResultado() {
    const inputNumeroElement = document.getElementById("inputNumero");
    const resultadoElement = document.getElementById("resultado");
    if (inputNumeroElement && resultadoElement) {
        const inputNumero = inputNumeroElement.value;
        const numero = parseFloat(inputNumero);
        if (!isNaN(numero)) {
            const resultado = convertirNumeroACadena(numero);
            resultadoElement.innerText = `El número en cadena es: ${resultado}`;
        }
        else {
            resultadoElement.innerText = "Por favor ingresa un número válido.";
        }
    }
}
const convertirBtn = document.getElementById("convertirBtn");
if (convertirBtn) {
    convertirBtn.addEventListener("click", mostrarResultado);
}
//Ejercicio 5
function sumarElementosArray(numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
function mostrarSuma() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const suma = sumarElementosArray(numeros);
    const resultadoElement = document.getElementById("resultado");
    if (resultadoElement) {
        resultadoElement.innerText = `La suma de los números es: ${suma}`;
    }
}
const sumarBtn = document.getElementById("sumarBtn");
if (sumarBtn) {
    sumarBtn.addEventListener("click", mostrarSuma);
}
const estudiante = {
    nombre: "Rodrigo Vega",
    edad: 21,
    curso: "Ingeniería de Software"
};
// Función para mostrar el estudiante en el HTML
function mostrarEstudiante(estudiante) {
    const resultado = document.getElementById('resultadoEstudiante');
    if (resultado) {
        resultado.innerHTML = `
            <p><strong>Estudiante:</strong> ${estudiante.nombre}</p>
            <p><strong>Edad:</strong> ${estudiante.edad}</p>
            <p><strong>Curso:</strong> ${estudiante.curso}</p>
        `;
    }
}
// Crear una dirección utilizando el tipo personalizado
const miDireccion = {
    calle: 'Av. de la Constitución 10',
    ciudad: 'Madrid',
    codigoPostal: '2814'
};
// Función para mostrar la dirección en el HTML
function mostrarDireccion() {
    const direccionElement = document.getElementById("direccion");
    if (direccionElement) {
        direccionElement.innerHTML = `
            <p>Dirección: Calle: ${miDireccion.calle}, Ciudad: ${miDireccion.ciudad}, CP: ${miDireccion.codigoPostal}</p>
        `;
    }
}
window.onload = mostrarDireccion;
mostrarEstudiante(estudiante);
// Implementar la interfaz en un objeto
const usuario = {
    nombre: 'Ana',
    correo: 'ana@gmail.com',
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y mi correo es ${this.correo}.`;
    }
};
// Función para mostrar el saludo en el HTML
function mostrarSaludo() {
    const saludoElement = document.getElementById("saludo");
    if (saludoElement) {
        saludoElement.innerText = usuario.saludar();
    }
}
window.onload = mostrarSaludo;
//Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}
// Crear una instancia de Persona y mostrar la presentación en el HTML
const persona = new Persona('Federico', 30);
const resultado = persona.presentarse();
// Agregar el resultado al HTML
const resultadoPersona = document.getElementById('resultadoPersona');
if (resultadoPersona) {
    resultadoPersona.textContent = resultado;
}
// Ejercicio 10
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
// Crear instancias de Caja para string y number
const cajaString = new Caja("Mensaje secreto");
const cajaNumber = new Caja(42);
// Obtener los valores de las cajas
const valorString = cajaString.obtenerValor();
const valorNumber = cajaNumber.obtenerValor();
// Mostrar los resultados en el HTML
const resultadoCaja = document.getElementById('resultadoCaja');
if (resultadoCaja) {
    resultadoCaja.innerHTML = `
        <p>Valor en cajaDeTexto: ${valorString}</p>
        <p>Valor en cajaDeNumero: ${valorNumber}</p>
    `;
}
//Ejercicio 11
function identidad(valor) {
    return valor;
}
// Usar la función con diferentes tipos de datos
const numero = 42;
const texto = 'Hola, TypeScript!';
const booleano = true;
const fecha = new Date();
// Obtener los resultados usando la función identidad
const resultadoNumero = identidad(numero);
const resultadoTexto = identidad(texto);
const resultadoBooleano = identidad(booleano);
const resultadoFecha = identidad(fecha);
// Función para mostrar los resultados en el HTML
function mostrarResultados() {
    const resultadosElement = document.getElementById("resultadoFuncion");
    if (resultadosElement) {
        resultadosElement.innerHTML = `
            <p>Número: ${resultadoNumero}</p>
            <p>Texto: ${resultadoTexto}</p>
            <p>Booleano: ${resultadoBooleano}</p>
            <p>Fecha: ${resultadoFecha.toDateString()}</p>
        `;
    }
}
window.onload = mostrarResultados;
//Ejercicio 12
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
// Asignar un color favorito a una variable
const colorFavorito = Color.Verde;
// Función para mostrar el color en el HTML
function mostrarColorFavorito(color) {
    const resultadoColor = document.getElementById('resultadoColor');
    if (resultadoColor) {
        resultadoColor.innerHTML = `<p><strong>Color favorito:</strong> ${color}</p>`;
    }
}
mostrarColorFavorito(colorFavorito);
