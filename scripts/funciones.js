console.log("Sesión HS03 funciones");

//++++++++FUNCIONES DECLARADAS++++++++++

console.log("Multiplica 5 * 6 = " + multiplica(5,6))
 /**
  * Este es un ejemplo de una función declarada 
  * (function declaration, function statement).
  * Una característica de las funciones declaradas es que tiene
  * un hoisting (elevación)
  * 
  * realiza la multiplicación de 2 números
  * @param {Number} a multiplicando 1
  * @param {Number} b multiplicador 2
  * @returns Resultado de la multiplicación de a*b
  */
function multiplica(a, b){
    return a*b;
}






//++++++++FUNCIONES EXPRESADAS++++++++++
/* Las funciones expresadas (function expressions)
son declaradas dentro de la asignación de una variable.

Estas funciones pueden ser anónimas (no tener nombre).
Las funciones expresadas no tienen hoisting. (la tienes que declarar antes de usarlas)*/


/**
 * Sumatoria de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */

const suma = function (a, b){
    return a+b;
}
console.log("El resultado de 56 + 4 = " + suma(56,4));


//++++++++FUNCIONES AUTOINVOCADAS++++++++++
/*Las funciones autoinvocadas (self invoking functoin)
pueden ser anónimas y se autoejecutan() en su declaración. */

(function (){
    console.log("=============");
    console.log("Hola crayoli");
    console.log("=============");
})
();


//++++++++FUNCIONES FLECHA ++++++++++
/* las funciones flecha (arrow function) son similares a las funciones
declaradas, pero no requieren la palabra "function" y si tienen una sola instrucción
y es el retorno, no requieren la instrucción "return".
*/

/**
 * Realiza la operación de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a, b) => a-b ;
console.log("El resultado de la resta de 10 - 5 = " + resta(10,5));

//++++++++FUNCIONES CON PARÁMETROS INICIALIZADOS ++++++++++

function divide(a,b=0){
    return a/b;
}
console.log("El resultado de la división de 10 / 5 = " + divide(4));

//++++++++FUNCIONES RECURSIVAS ++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

console.log("El factorial de 5 = " + factorial(5));
