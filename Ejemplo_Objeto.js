
const laura = {
  nombre: 'Laura',
  apellido1: 'Arredondo',
  apellido2: 'Carbajo',
  edad: 27
}

console.log(laura.nombre);

//esto es un objeto
const antonio = {
  nombre: 'Antonio', //esto es una variable que contiene un texto
  apellido1: 'Cortés', //esto es una variable que contiene un texto
  apellido2: 'López', //esto es una variable que contiene un texto
  edad: 29, //esto es una variable que contiene un numero
  saludarDentroDeVariable: (nombreSaludo) => { //esto es una variable que contiene una funcion anónima con un parámetro
      console.log('Hola ' + nombreSaludo + ', mi nombre es Antonio');
  }
}

console.log(antonio);

console.log(antonio.nombre + antonio.edad + antonio.apellido1);

antonio.saludarDentroDeVariable('Antonio');