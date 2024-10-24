/* let nombre = prompt ('Cual es tu nombre?');
let edad = prompt ('Cual es tu edad ?');

document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`; */


/* 24/10 */
/* Ejemplos con var*/

/* Ejemplo 1 Ambito de funcion*/

function ejemploVar(){
    if(true) {
        var mensaje = 'Hola, Mundo!';
    }
    console.log(mensaje);
}

ejemploVar();

/* Ejemplo 2 Hoisting*/

console.log(nombre);
var nombre = 'Ana';
console.log(nombre);

/* Ejemplo 3: Reasignación */

var edad = '25';
edad = 30;
console.log(edad);


