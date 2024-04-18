//Esto es una funcion que recibe dos parámetros
function miEdad(añoActual, añoNacimiento) {
  return añoActual - añoNacimiento; //aquí la función está devolviendo (con el return) la resta de los dos parámetros
}
const edad = miEdad(2024, 1997); //aquí se llama a la función, la función devuelve la resta de los dos parámetros y esto que devuelve se guarda en una constante

console.log('Mi edad es ' + edad); //aquí se escribe por consola un texto al que se le añade lo que hay dentro de la constante edad