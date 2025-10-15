
# Fundamentos-Funciones
//Var, Let,const

var cantidadPeliculas = 250
let usuarioACtivo = true
const numAnolanzamiento = 2000

console.log(cantidadPeliculas + " "+ usuarioACtivo + " " + numAnolanzamiento)

//Strings

let nombre = "Una batalla tras otra"
let emailMovie = "unabatallatrasotra@ibm.com"
let ano = 2025
let puntuacion = 8.9
let vistas = 79.000
console.log(nombre + "   "+ano+";"+ " "+puntuacion+"stars"+ ";"+" "+vistas+ "K")
console.log(nombre.toLocaleUpperCase())
console.log(nombre.toLocaleLowerCase())
console.log(emailMovie.includes("@"))
console.log(emailMovie.toLocaleLowerCase().endsWith ("@ibm.com"))
console.log("Reemplazar una palabra:",nombre.replace('Una','una'));

//Template Literals
const name = "Una batalla tras otra"
const country ="USA"
const language = "EN"
const earnings = 105
const active = true
console.log(name +"-"+country+"-"+language)
console.log(`${name} - ${country} - ${language} - ${active ? earnings + "M" : 'No se encuentra activo'}`);

//Numbers

const numGananciaUSA = 43

const numGananciaGlobal = 105
const numpresupuesto = 130

console.log(numGananciaUSA,numGananciaGlobal);

console.log("suma:",numGananciaGlobal+numGananciaUSA);
console.log("resta:",numGananciaGlobal + numGananciaUSA- numpresupuesto);

let totalGanancias = numGananciaUSA + numGananciaGlobal;

if (totalGanancias > numpresupuesto) {
console.log(" La película fue rentable");
} else {
console.log(" La película tuvo pérdidas");
}

//MATH

// Mostrar el objeto Math
console.log("El objeto Math contiene muchas funciones matemáticas:", Math);
console.log("Constante PI:", Math.PI);
let gananciaDecimal = 43.76;
console.log("Ganancia redondeada (USA):", Math.round(gananciaDecimal));
console.log("Raíz cuadrada de la ganancia global:", Math.sqrt(numGananciaGlobal));
let gananciaNegativa = -15;
console.log("Valor absoluto de una pérdida:", Math.abs(gananciaNegativa));
console.log("Ganancia USA al cuadrado:", Math.pow(numGananciaUSA, 2));
console.log("Menor ganancia entre USA y Global:", Math.min(numGananciaUSA, numGananciaGlobal));
console.log("Mayor valor entre Global y Presupuesto:", Math.max(numGananciaGlobal, numpresupuesto));
console.log("Ganancia aleatoria (0 a 20 millones):", Math.round(Math.random() * 20));
//ORDEN DE PRECEDENCIA 

/*
Aplicando el proceso con los valor de ganancia de la pelicula

*/
console.log("numGananciaUSA + numGananciaGlobal * 0.1 =", numGananciaUSA + numGananciaGlobal * 0.1);
console.log("0.5 * numGananciaUSA ** 2 =", 0.5 * numGananciaUSA ** 2);
console.log("numGananciaUSA + numGananciaGlobal =", numGananciaUSA + numGananciaGlobal);
console.log("(numGananciaUSA + numGananciaGlobal) * 0.1 =", (numGananciaUSA + numGananciaGlobal) * 0.1);
console.log("numPresupuesto - numGananciaGlobal * 0.5 =", numpresupuesto - numGananciaGlobal * 0.5);
console.log("(numPresupuesto - numGananciaGlobal) * 0.5 =", (numpresupuesto - numGananciaGlobal) * 0.5);
console.log("numGananciaGlobal + numGananciaUSA ** 2 * 0.01 =", numGananciaGlobal + numGananciaUSA ** 2 * 0.01);


//Conversion de Numeros

console.log(Number.parseInt(numGananciaUSA));
console.log(Number.parseFloat(numGananciaGlobal));
console.log(Number.isInteger(Number(numGananciaUSA)));
console.log("Ganancia en enteros", +numGananciaUSA + +numGananciaGlobal);
console.log("Ganancia vs presupuesto:", (+numGananciaUSA + +numGananciaGlobal) - +numpresupuesto);


//CONDICION SIMPLE 
const peliculas = [];


if (peliculas.length === 0) {
    console.log("Agregar películas al listado");
}
// operador ternario
peliculas.length === 0 ? console.log("Agregar películas al listado") : "";


//CONDICION DOBLE
const movies= ['Una batalla tras otra', 'La última misión', 'Héroes del tiempo'];

if (movies.length !== 0) {
    console.log("Proceder a procesar las películas");
} else {
    console.log("Agregar películas al listado");
}
// Operador ternario
console.log(peliculas.length !== 0 ? "Proceder a procesar las películas" : "Agregar películas al listado");


//CONDICION MULTIPLE
console.log(totalGanancias > numpresupuesto * 1.5 ? "Película alta rentabilidad": totalGanancias > numpresupuesto ? "Película rentable"
: totalGanancias === numpresupuesto? "Película neutra sin ganancia": "Película, genera perdida "
);
