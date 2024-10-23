# Introducción a JavaScript Moderno
JavaScript es un lenguaje de programación que se ha convertido en esencial para el desarrollo web. A lo largo de los años, ha evolucionado significativamente. A continuación, se presentan algunos de los conceptos y características más destacadas del JavaScript moderno:

## ECMAScript 6 (ES6) y Más Allá
ECMAScript 6, también conocido como ES6 o ES2015, trajo consigo muchas mejoras al lenguaje. Desde entonces, nuevas versiones han añadido aún más funcionalidad. Algunas de las características más importantes incluyen:

### 1.Variables y Constantes
 `let` y `const` reemplazan a var para una mejor gestión del alcance de las variables.

```js
let nombre = 'Juan';
const PI = 3.14;
```

### 2.Funciones de Flecha
Sintaxis más corta y léxica `this`.

```js
const sumar = (a, b) => a + b;
```

### 3.Template Literals
Facilitan la creación de cadenas de texto complejas.

```js
let nombre = 'Juan';
let saludo = `Hola, ${nombre}!`;
```

### 4.Destructuring
Permite extraer datos de arrays u objetos de manera más concisa.

```js
let [a, b] = [1, 2];
let { nombre, edad } = { nombre: 'Ana', edad: 25 };
```

### 5.Promesas y Async/Await
Manejo de operaciones asíncronas de manera más limpia y eficiente.

```js
const obtenerDatos = async () => {
  let respuesta = await fetch('https://api.example.com/datos');
  let datos = await respuesta.json();
  console.log(datos);
};
```

### 6.Clases
Facilitan la escritura de código orientado a objetos.

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let juan = new Persona('Juan', 30);
juan.saludar();
```