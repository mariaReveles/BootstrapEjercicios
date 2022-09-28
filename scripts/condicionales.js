console.log("Sesión JS03 Condicionales")
// ++++++++ DECLARACIÓN DE BLOQUE ++++++++++

let nombre = "Rafa";
let ciudad = "Guadalajara";

;{
    const listado = ["Olivia", "Benja", "Luis", "Linda"]
    let nombre = "Fer";
    let ciudad = "Cdmx";
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vivo en ${ciudad}`); 

}

console.log(`Participante: ${nombre} que vive en ${ciudad}`);

// ++++++++ CONDICIONAL IF  ++++++++++
/**
 * sintáxis:
 * 
 * 1.sintáxis básica para una sola instrucicón:
 *     if(condicionVerdadera) instrucción;
 * 
 * 
 * 2.Sintáxis para condicionales con más de una instrucción. Se abre bloque  
 *    if(condicionVerdadera){
 *      instrucciones;
 *      }
 * 
 */
let edad= 50;

console.log("*** Declaración antes del if ---->");

if (edad > 24 ) {
    console.log("La edad es MAYOR a 25");
 }
else{
console.log("La edad es menor a 25");
console.log("Seguiremos evaluando");
}

console.log("<----Declaración después del if ****");

// ++++++++ OPERADOR TERNARIO  ++++++++++
/*
sintáxis: 
condición ? condición_verdadera : condición_falsa
*/

console.log(`La edad es ${edad>24 ? "mayor" : "menor"} a 25 `) ;
console.log(`La edad es ${edad===24 ? "es igual" : (edad>24 ? "mayor":"menor")} a 25`) ;

// ++++++++ Condicional if, else if, else  ++++++++++ //
/**
 *    Sintaxis:
 *          if( condicionVerdadera ) {
 *               instrucciones;
 *            }
 *          else if (OtraCondicion) {
 *            }
 * *        else if (OtraCondicion) {
 *            }
 *          else {
 *              Instrucciones;
 *            }              
 */

let year = 1995

if(year===2022) theYearIs = "es el año actual"  ;

else if(year<2022) theYearIs = "el pasado";

else theYearIs = "el futuro";

console.log(`¿qué año es ${year} ? -  ${theYearIs}`);


// ++++++++ Condicional switch ++++++++++ //
/**
 * Sintaxis:
 *        switch(expresion){
 *            case valor1:
 *                  instrucciones;
 *                  break;
 * 
 *            case valor2:
 *                  instrucciones;
 *                  break;
 * 
 *            case valor3:
 *                  instrucciones;
 *                  break;
 * 
 *           defaul:
 *                  instrucciones;
 *       }
 */

 let numeroMes = 5;
 let estacion = "", mes = "";
 
 switch (numeroMes) {
   case 12:
     mes = "Diciembre";

     break;
   case 1:
     mes = "Enero";

     break;
   case 2:
     mes = "Febrero";

     break;
    default: estacion = "invierno"
}

switch (numeroMes) {
   case 3:
     mes = "Marzo";

     break;
   case 4:
     mes = "Abril";

     break;
   case 5:
     mes = "Mayo";

     break;
     default: estacion = "primavera"
}
switch (numeroMes) {
   case 6:
     mes = "Junio";

     break;
   case 7:
     mes = "Julio";

     break;
   case 8:
     mes = "Agosto";

     break;
     default: estacion =  "verano"
    }
    switch (numeroMes) {
   case 9:
     mes = "Septiembre";

     break;
   case 10:
     mes = "Octubre";

     break;
   case 11:
     mes = "Noviembre";

     break;
     default: estacion = "otoño"
    }
 
 
 console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

numeroMes = 5;
estacion = "";
mes = "";

if(numeroMes) {
      numeroMes = 12||1||2
      estacion = "invierno"
   }
 else if (OtraCondicion) {
   }
 else if (OtraCondicion) {
   }
 else {
     Instrucciones;
   }              
