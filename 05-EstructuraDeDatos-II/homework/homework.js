'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
*/
function LinkedList() {
  /* 1 - se intancia el head*/
  this.head = null
}

function Node(value) {
  /* 2 - se instancia value*/
  this.value = value
  /* 3 - se instancia next*/
  this.next = null
}

//- add: agrega un nuevo nodo al final de la lista;
//--FUNCION ADD-->

/* 4 - le agrego la funcion add a linkedlist*/
LinkedList.prototype.add = function () {

  /* 5 - instanciar un nodo con ese valor*/
  var newNode = new Node(value)
  /* 6 - crear current ->es un apuntador auxiliar (busca y apunta al ultimo nodo) */
  var current = this.head
  /* 7 - SI la lista estaba vacia -> newNode pasa a ser this.head, es decir current */
  if (!current) {
    this.head = newNode
    return value
  } else {
    /* 8 - SI la lista NO estaba vacia -> comienza el recorrido*/
    while (current.next)
      /* 9 - agregar newNode al final de la lista */
      current = current.next
  }
  /* 10 - cuando descubre que no hay current.next sale del while, crea el nuevo nodo y retorna value */
  current.next = newNode
  return value;
}

//- remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular 
// de una lista de un solo nodo y de una lista vacía);
// --FUNCION REMOVE--->

/* *while(curren.next)=> A dnd llego? Termino parado en el ultimo nodo de la lista */
/* *while(curren.next.next)=> A dnd llego? Termino parado en el ante-ultimo nodo de la lista */
/* *while(curren)=>a dnd llego? Termino fuera de la lista - Me caigo*/

LinkedList.prototype.remove = function () {
  var current = this.head
  /*LALISTA ESTABA VACIA */
  //NO TENGO NODO =>NADA QUE HACER
  if (!current) {
    return null
  }
  /*LA LISTA TENIA UN SOLO NODO */
  //TENGO UN SOLO NODO =>NO TENGO NINGUN ANTEULTIMO
  else if (!current.next) {
    var aux = current.value
    this.head = null
    return aux;
  }
  /*LA LISTA TENIA VARIOS NODOS */
  //TENGO MAS DE UN NODO=>VOY HASTA EL ANTEULTIMO Y ELIMINO AL PROXIMO
  while (current.next.next) {

    current = current.next
    var aux = current.next.value
    current.next = null
    return aux
  }

}
// - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
// el parámetro puede ser 
// un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
// en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
// EJEMPLO 
// search(3) busca un nodo cuyo valor sea 3;
// search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
// busca un nodo cuyo valor sea un número par.
// En caso de que la búsqueda no arroje resultados, search debe retornar null.

//--FUNCION SEARCH---->
LinkedList.prototype.search = function (param /*value o cb */ ) {

  //SI VALUE ES UN VALOR=> BUSCAR VALOR
  //SI VALUE ES UNA CALLBACK=>BUSCAR NODO QUE COINCIDA CON ESE VALOR Y QUE RETORNE TRUE - EJEMPLO isEven(busca numeros pares)
  var current = this.head;
  if (!current) return false; /* esto lo saco de los tests */

  //si tengo una funcion
  if (typeof param === "function") {

    /*mientras haya algun current.. */
    while (current) {
      /*si current.value es igual a param retornamelo */
      if (param(current.value)) {
        return current.value
        /*sino que current sea current.next para pasar al sig nodo */
      } else {
        current = current.next
      }
      return null
    }
    //si tengo otra cosa
  } else {


    /*mientras haya algun current.. */
    while (current) {
      /*si current.value es igual a param retornamelo */
      if (current.value === param) {
        return param;
        /*sino que current sea current.next para pasar al sig nodo */
      } else {
        current = current.next
      }
      /*si recorri todos los nodos y no encontre un value igual, retorna null */
      return null

    }

  }

}

//---------------------------------------------------------

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir,
   posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor 
   (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, 
  a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba
   la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético,
   suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) 
   y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina 
   la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, 
  y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por pará- metro y consulta si ya hay algo almacenado en la tabla con esa clave 
  (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, 
si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), 
se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  //creo numBuckets y buckets
  this.buckets= []
this.numBuckets = 35
}

//--------------------------------/*instancia la funcion hash para la clase HasTable */
//JORGE
//
/*un acumulador para el total */

/*recorro la key(array) con for of y nombro a cada bucket var=char*/

//TAMBIEN se puede hacer con un for => for (let i=0 ; i<key.lenght, i++){
//                                      var char= array[i]}
/*la accion que ejecuta el for of es convertir cada letra en un numero Unicode y sumarlo(ver hash y charCodeaAt)  */

//esto es el indice del array donde lo voy a guardar */


//-----------------------------------/*instancia la funcion set para la clase HashTable */
/*if (typeof key !=="string") throw TypeError("key must be strings");*/
/* deberia devolver un error cuando el key no es un string */

// hasheo la key y la guardo en index */

// si el bucket señalado por el index esta vacio, */

//guardo el obj{key:value} en el index señalado

/* si no esta vacio, le asigno un nuevo valor a la key de ese bucket */


//------------------------------------/* instancia la funcion get para la clase HashTable */

/*hasheo la key y la guardo en index */

/*guardo el valor de key en el bucket indicado por index y retorno */


//----------------------------------/*intancio la funcion hasKey para la clase HashTable */

/*hasheo la key y la guardo en index */

/*si hay un bucket en este index con esta key */

/*retorname true */

/*sino retorname false */


//OTRAS FORMAS DE EXPRESAR LO MISMO:
//return !! this.buckets[index][key] --------- la doble negacion retorna booleano->existe este buckets con esta key en este index ? T  F
//  return !!this.get(key) -------la otra forma es usar el metodo ya creado, pasarle la key y buscar booleano por doble negacion.


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};