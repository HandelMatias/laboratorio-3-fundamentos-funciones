// ===============================
// FUNDAMENTOS DE FUNCIONES EN JAVASCRIPT
// ===============================

// 1️⃣ Función Declarada
// Se puede llamar antes o después de declararla.
function calcularGanancia(total, presupuesto) {
    if (total > presupuesto) {
        return "Rentable ✅";
    } else if (total === presupuesto) {
        return "Equilibrada ⚖️";
    } else {
        return "Pérdida ❌";
    }
}

// Ejemplo de uso:
console.log("Ejemplo 1:", calcularGanancia(150, 100));
console.log("Ejemplo 2:", calcularGanancia(100, 100));
console.log("Ejemplo 3:", calcularGanancia(80, 100));


// 2️⃣ Función Expresada (anónima)
// Se guarda dentro de una variable o constante.
const convertirMoneda = function (cantidadUSD) {
    const tasaCambio = 0.92; // Dólar a Euro
    return `${cantidadUSD} USD = ${(cantidadUSD * tasaCambio).toFixed(2)} EUR`;
};

console.log("Ejemplo de conversión:", convertirMoneda(50));


// 3️⃣ Función Flecha (Arrow Function)
// Sintaxis más corta y moderna de ES6.
const saludar = (nombre) => `🎬 Bienvenido al cine, ${nombre}!`;

console.log(saludar("Matías"));


// 4️⃣ Función con Parámetros por Defecto
function calcularIVA(precio, iva = 12) {
    return precio + (precio * iva / 100);
}

console.log("Precio con IVA (12%):", calcularIVA(100));
console.log("Precio con IVA (8%):", calcularIVA(100, 8));


// 5️⃣ Función que devuelve otra función (Closure)
function crearDescuento(descuento) {
    return function(precio) {
        return precio - (precio * descuento / 100);
    };
}

const descuento10 = crearDescuento(10);
const descuento25 = crearDescuento(25);

console.log("Precio con 10% de descuento:", descuento10(200));
console.log("Precio con 25% de descuento:", descuento25(200));


// 6️⃣ Funciones que reciben Arrays
function listarPeliculas(peliculas) {
    peliculas.forEach((peli, index) => {
        console.log(`${index + 1}. ${peli}`);
    });
}

const movies = ["Una batalla tras otra", "La última misión", "Héroes del tiempo"];
console.log("\n🎞️ Lista de películas:");
listarPeliculas(movies);


// 7️⃣ Funciones con return y condicionales
function evaluarPuntuacion(puntuacion) {
    if (puntuacion >= 9) return "Excelente ⭐⭐⭐⭐⭐";
    if (puntuacion >= 7) return "Buena ⭐⭐⭐⭐";
    if (puntuacion >= 5) return "Regular ⭐⭐⭐";
    return "Mala 💔";
}

console.log("Evaluación de película:", evaluarPuntuacion(8.5));
console.log("Evaluación de película:", evaluarPuntuacion(4.8));


// 8️⃣ Función anónima inmediata (IIFE)
// Se ejecuta en cuanto se define.
(function() {
    console.log("\n🧠 Función IIFE ejecutada automáticamente.");
})();


// 9️⃣ Función con Operador Ternario
const verificarUsuario = (activo) => activo ? "Usuario activo 🟢" : "Usuario inactivo 🔴";
console.log(verificarUsuario(true));
console.log(verificarUsuario(false));


// 🔟 Función que utiliza Template Literals
function resumenPelicula(nombre, pais, idioma, ganancias) {
    return `🎬 ${nombre} (${pais}, ${idioma}) — Ganancias: $${ganancias}M`;
}

console.log(resumenPelicula("Una batalla tras otra", "USA", "EN", 105));
