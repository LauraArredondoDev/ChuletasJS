//FUNCIONES CON NOMBRE

//FUNCIÓN SIN PARÁMETROS
function funcionSinParametros() {
  console.log('Soy una función sin parámetros');
}

//FUNCIÓN CON PARÁMETROS
function funcionParametros(anioActual, anioNacimiento) {
  const edad = anioActual - anioNacimiento;
  console.log('Mi edad es ' + edad );
}

funcionParametros(2024, 1997);

funcionSinParametros();

//FUNCIONES SIN NOMBRE/ANONIMAS

//----------------Sin parámetros-----------------------

//FUNCION ANÓNIMA SIN PARÁMETROS FORMA ANTIGUA
const funcionDentroConstante = function () {
  console.log('Soy una función sin parámetros y anónima');
}

funcionDentroConstante();

//FUNCIÓN ANÓNIMA SIN PARÁMETROS FORMA MODERNA
const funcionDentroConstanteModerna = () => {
  console.log('Soy una función sin parámetros, anónima y dentro de una constante de manera moderna');
}

funcionDentroConstanteModerna();
//-----------------Con parámetros-----------------------

//FUNCIÓN ANÓNIMA CON PARÁMETROS FORMA ANTIGUA
const funcionDentroConstanteConParametros = function (anioActual, anioNacimiento) {
   const edad = anioActual - anioNacimiento;
  console.log('funcionDentroConstanteConParametros: Mi edad es ' + edad );
}
funcionDentroConstanteConParametros(2024, 1997);

//FUNCIÓN ANÓNIMA CON PARÁMETROS FORMA MODERNA
const funcionDentroConstanteModernaParametros = (anioActual, anioNacimiento) => {
   const edad = anioActual - anioNacimiento;
  console.log(' funcionDentroConstanteModernaParametros: Mi edad es ' + edad );
} 

funcionDentroConstanteModernaParametros(2024, 1997);

//FUNCIONES ANÓNIMAS FORMA MODERNA CON UN SOLO PARÁMETRO
const decirMiNombre = (nombre) => {
  console.log('Hola mi nombre es ' + nombre);
}

decirMiNombre('Laura');

const decirMiApellido = apellido => {//como solo tiene un parámetro, no hace falta poner el parámetro entre paréntesis
  console.log('Mi apellido es ' + apellido);
}

decirMiApellido('Arredondo');
