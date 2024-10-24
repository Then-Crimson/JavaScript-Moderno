# Uso de la Variable `var` en JavaScript

La palabra clave var se utilizaba tradicionalmente para declarar variables en JavaScript. Aunque sigue siendo válida, ha sido en gran parte reemplazada por let y const en la práctica moderna. A continuación se presentan algunas características y ejemplos del uso de `var`:

### Características de `var`

- **Ámbito de Función**: Las variables declaradas con `var` tienen un ámbito de función, lo que significa que están disponibles en toda la función donde fueron declaradas.
- **Hoisting**: Las variables declaradas con `var` son "hoisted" al principio de su ámbito, lo que significa que se pueden utilizar antes de su declaración, aunque su valor será `undefined` hasta que se asigne uno.
- **Reasignación Permitida**: Las variables declaradas con `var` pueden ser reasignadas.

### Ejemplos
### Ejemplo 1: Ámbito de Función

```js
function ejemploVar() {
  if (true) {
    var mensaje = 'Hola, Mundo!';
  }
  console.log(mensaje); // 'Hola, Mundo!' (Disponible en toda la función)
}

ejemploVar();
```
### Ejemplo 2: Hoisting

```js
console.log(nombre); // undefined
var nombre = 'Ana';
console.log(nombre); // 'Ana'
```

**Explicación**: La declaración `var nombre` es "hoisted" al inicio del ámbito, pero la asignación `nombre = 'Ana'` se realiza en su lugar original.

### Ejemplo 3: Reasignación

```js
var edad = 25;
edad = 30;
console.log(edad); // 30
```

### Comparación con `let` y `const`
A pesar de que `var` aún se puede utilizar, las palabras clave `let` y `const` se prefieren en el JavaScript moderno debido a su ámbito de bloque y otras características que evitan errores comunes.

```js
let ciudad = 'Potosí';
ciudad = 'La Paz'; // Permitido

const pais = 'Bolivia';
pais = 'Argentina'; // Error: Asignación a una constante
```