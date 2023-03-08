'use strict';
// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
//-------------------

//
//     expect(typeof counter()).toBe('function');=> espera que counter()  sea una funcion
//  
//     expect(counter()()).toBe(1);=> espera que cuando la invoque sin parametro retorne 1
//
//     const counterFunction = counter();=> espera que la variable const=counterFunction contenga la funcion counter()
//     expect(counterFunction()).toBe(1);=> espera q si la invoca varias veces vaya retornando 1
//     expect(counterFunction()).toBe(2);=> retornando 2
//     expect(counterFunction()).toBe(3);=> retornando 3
//     expect(counterFunction()).toBe(4);=> retornando 4
//     expect(counterFunction()).toBe(5);=> retornando 5

//     const counterOne = counter();=> espera que la variable counterOne contenga la funcion counter()
//     const counterTwo = counter();=> espera que la variable counterTwo contenga la funcion counter()
//     expect(counterOne()).toBe(1);=> espera que si invoca a counterOne varias veces devuelva 1 ,2, 3, 4
//     expect(counterOne()).toBe(2);=>
//     expect(counterOne()).toBe(3);=>
//     expect(counterOne()).toBe(4);=>
//     expect(counterTwo()).toBe(1);=> espera que si invoca a counterTwo varias veces devuelva 1 ,2
//     expect(counterTwo()).toBe(2);=>


function counter() {
  let count = 1
  return function sumar1() {
    return count++
  }
}

const counterFunction = counter()
counterFunction()
counterFunction()
counterFunction()
console.log(counterFunction())

const counterOne = counter()
counterOne()
counterOne()
console.log(counterOne());
const counterTwo = counter()
counterTwo()
console.log(counterTwo());
//---------------------------------------------------------------------------------

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) { //cb es una funcion cualquiera .callback
  var cache = {} // dejo la var cache como obj vacio que voy a ir llenando

  return function (arg) {
    //si ya tengo el valor guadado en cache, retorno ese valor;  si no lo tengo, debo ejecutar la funcion
    if (cache.hasOwnProperty(arg)) { //cache tiene su propia propiedad "arg" ?
      return cache[arg]; //si lo tiene retorna esa propiedad arg
    } else {
      cache[arg] = cb(arg); //   si no lo tiene, primero guardo en cache[arg] la ejecucion de cb(arg)
      return cache[arg]; // retona esa propiedad arg
    }
  };
}
//----------------------------------------

// Bind
var instructor = {
  nombre: 'Franco',
  edad: 25,
};
var alumno = {
  nombre: 'Juan',
  curso: 'FullStack',
};

function getNombre() {
  return this.nombre;
}
/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

console.log(getNombreInstructor(instructor));
console.log(getNombreAlumno(alumno));

//---------------------------

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null,"*","*", );//null porq bind necesita saber quien es this, pero la funcion padre no tiene this, por eso ponemos null
let textoGuiones = crearCadena.bind(null,"-","-");
let textoUnderscore = crearCadena.bind(null,"_","_");

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};