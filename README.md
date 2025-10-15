# 🧠 Laboratorio 03 - Fundamentos y Funciones en JavaScript

**Materia:** Desarrollo de Aplicaciones Web  
**Profesor:** Ing. Byron Loarte  
**Institución:** Escuela Politécnica Nacional  
**Período:** 2025-A  

---

## 🎯 Propósito de la práctica
Familiarizar al estudiante con el lenguaje de programación **JavaScript**, reconociendo su sintaxis básica, estructuras de control, manejo de variables, y el uso de **funciones** para la lógica de programación.

---

## 👥 Integrantes del grupo
| N° | Nombre |
|----|---------|
| 1 | Handel Manobanda |
| 2 | Jhosselin Naula |
| 3 | Carlos Quintana|

---

## 📂 Archivos del proyecto

| Archivo | Descripción |
|----------|--------------|
| `01-fundaments.js` | Contiene ejemplos sobre los fundamentos de JavaScript: variables, strings, template literals, números, objeto Math, condiciones, conversiones, etc. |
| `02-functions.js` | Desarrolla la segunda parte del laboratorio: funciones declaradas, expresadas, flecha, con parámetros por defecto, funciones dentro de funciones, closures e IIFE. |
| `README.md` | Documento descriptivo del laboratorio y su desarrollo. |

---

## ⚙️ Ejecución del proyecto

1. Clona o descarga el repositorio.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta los siguientes comandos:

```bash
node 01-fundaments.js
node 02-functions.js
```

4. Observa los resultados en la consola de Node.js.

---

## 🧩 Temas aplicados

### 🔹 Fundamentos (`01-fundaments.js`)
- Declaración de variables (`var`, `let`, `const`)
- Manipulación de cadenas (`toUpperCase()`, `replace()`, `includes()`)
- Uso de **template literals**
- Operaciones matemáticas y **objeto `Math`**
- **Conversión de tipos numéricos**
- **Condiciones:** simples, dobles, múltiples y operador ternario

### 🔹 Funciones (`02-functions.js`)
- Funciones **declaradas**, **expresadas** y **flecha**
- Parámetros por defecto
- Funciones que retornan valores
- Funciones con condicionales
- Funciones anidadas y **closures**
- Función **IIFE** (Immediately Invoked Function Expression)
- Uso de **template literals** dentro de funciones
- Manejo de arreglos con funciones (`forEach`)

---

## 🧮 Ejemplo práctico

```js
function calcularGanancia(total, presupuesto) {
  return total > presupuesto ? "Rentable ✅" : "Pérdida ❌";
}

console.log(calcularGanancia(150, 100)); // Rentable ✅
```

```js
const saludar = (nombre) => `🎬 Bienvenido al cine, ${nombre}!`;
console.log(saludar("Matías"));
```

---

## 📚 Recursos utilizados

- **Notion - Fundamentos de JavaScript:**  
  https://byronloarte.notion.site/Fundamentals-14cba0b9b2de4af99d167ce604dc12a3?pvs=4

- **Notion - Funciones:**  
  https://byronloarte.notion.site/Functions-bc38108ef2e8426c9af498b2830b4052?pvs=4

- **Blog para resumen a mano:**  
  [ES6 features that every front-end developer should know](https://praason.medium.com/es6-features-that-every-front-end-developer-should-know-64a90da1f672)

---

## 🏁 Conclusión

El laboratorio permitió reforzar los **conceptos básicos de JavaScript**, comprendiendo la estructura y comportamiento del lenguaje, así como el uso de funciones para modularizar el código.  
Además, se practicó el uso de GitHub para alojar el proyecto en una rama llamada **`fundamentos-funciones`** con la respectiva documentación.

---

## 🔗 Enlace al repositorio del grupo
> https://github.com/HandelMatias/laboratorio-3-fundamentos-funciones.git

