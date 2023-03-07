'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular 
    de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser 
  un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
  en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
    /* 1 - se intancia el head*/
    this.head = null
    //this.size= 0
    //this.tail= null
}

function Node(value) {
    /* 2 - se instancia value*/
    this.value = value;
    /* 3 - se instancia next*/
    this.next = null;


}
//--FUNCION ADD-->

/* 4 - le agrego la funcion add a linkedlist*/
LinkedList.prototype.add = function (value) {
    /* 5 - instanciar un nodo con ese valor*/
    var newNode = new Node(value);
    /* 6 - crear current ->es un apuntador auxiliar (busca y apunta al ultimo nodo) */
    var current = this.head
    /* 7 - SI la lista estaba vacia -> newNode pasa a ser this.head, es decir current */
    if (!current /*current===null*/ ) {
        this.head = newNode
        return value;
    } else {

        /* 8 - SI la lista NO estaba vacia -> comienza el recorrido*/
        while (current.next /*current.next !== null*/ ) {
            /* 9 - agregar newNode al final de la lista */
            current = current.next;
        }
        current.next = newNode
        return value;
    }
}

var myList = new LinkedList()
myList.add(5)
myList.add(10)
myList.add(15)
myList.add(20)
myList.add(25)
console.log(myList);

// --FUNCION REMOVE--->
LinkedList.prototype.remove = function () {
    /* *while(curren.next)=> A dnd llego? Termino parado en el ultimo nodo de la lista */
    /* *while(curren.next.next)=> A dnd llego? Termino parado en el ante-ultimo nodo de la lista */
    /* *while(curren)=>a dnd llego? Termino fuera de la lista - Me caigo*/
    //NO TENGO NODO =>NADA QUE HACER
    //TENGO UN SOLO NODO =>NO TENGO NINGUN ANTEULTIMO
    //TENGO MAS DE UN NODO=>VOY HASTA EL ANTEULTIMO Y ELIMINO AL PROXIMO
    var current = this.head
    /*LALISTA ESTABA VACIA */
    if (!current) return null;
    /*LA LISTA TENIA UN SOLO NODO */
    else if (!current.next) {
        var aux = current.value;
        this.head = null;
        return aux
    }
    /*LA LISTA TENIA VARIOS NODOS */
    while (current.next.next) {
        current = current.next
    }
    var aux = current.next.value
    current.next = null
    return aux
}

myList.remove()
myList.remove()

console.log(myList);

//--FUNCION SEARCH---->
LinkedList.prototype.search = function (param /* :value o function */ ) {
    //SI VALUE ES UN VALOR=> BUSCAR VALOR
    //SI VALUE ES UNA CALLBACK=>BUSCAR NODO QUE COINCIDA CON ESE VALOR Y QUE RETORNE TRUE - EJEMPLO isEven(busca numeros pares)
    var current = this.head;
    if (!current) return false;

    if (typeof param === "function") { //tengo una funcion
        while (current) {
            /*mientras haya algun current.. */
            if (param(current.value)) return current.value; /*si current.value es igual a param retornamelo */
            else current = current.next; /*sino que current sea current.next para pasar al sig nodo */
        }
        return null
    } else {
        //tengo otra cosa
        while (current) {
            /*mientras haya algun current.. */
            if (current.value === param) return param /*si current.value es igual a param retornamelo */
            else current = current.next; /*sino que current sea current.next para pasar al sig nodo */
        }
        return null /*si recorri todos los nodos y no encontre un value igual, retorna null */
    }
    //No tengo nodos
    //tengo un solo nodo
    // Tengo varios nodos
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
    this.numBuckets = 35
    this.buckets = []
}

HashTable.prototype.hash = function (key) { //--------------------------------/*instancia la funcion hash para la clase HasTable */
    //JORGE
    //
    var suma = 0 /*un acumulador para el total */
    for (var char of key) {
        /*recorro la key(array) con for of y nombro a cada bucket var=char*/
        //TAMBIEN se puede hacer con un for => for (let i=0 ; i<key.lenght, i++){
        //                                      var char= array[i]}
        suma += char.charCodeAt() /*la accion que ejecuta el for of es convertir cada letra en un numero Unicode y sumarlo(ver hash y charCodeaAt)  */
    }
    return suma % this.numBuckets //esto es el indice del array donde lo voy a guardar */
}

HashTable.prototype.set = function (key, value) { //-----------------------------------/*instancia la funcion set para la clase HashTable */
    if (typeof key !== "string") throw TypeError("key must be strings"); /* deberia devolver un error cuando el key no es un string */
    var index = this.hash(key); // hasheo la key y la guardo en index */

    if (!this.buckets[index]) { // si el bucket señalado por el index esta vacio, */
        this.buckets[index] = {
            [key]: value
        }; //guardo el obj{key:value} en el index señalado
    } else {
        this.buckets[index][key] = value; /* si no esta vacio, le asigno un nuevo valor a la key de ese bucket */
    }
}

HashTable.prototype.get = function (key) { //------------------------------------/* instancia la funcion get para la clase HashTable */
    var index = this.hash(key) /*hasheo la key y la guardo en index */
    return this.buckets[index][key] /*guardo el valor de key en el bucket indicado por index y retorno */
}

HashTable.prototype.hasKey = function (key) { //----------------------------------/*intancio la funcion hasKey para la clase HashTable */
    var index = this.hash(key); /*hasheo la key y la guardo en index */
    if (this.buckets[index][key]) {
        /*si hay un bucket en este index con esta key */
        return true /*retorname true */
    } else {
        return false; /*sino retorname false */
    }

    //OTRAS FORMAS DE EXPRESAR LO MISMO:
    //return !! this.buckets[index][key] --------- la doble negacion retorna booleano->existe este buckets con esta key en este index ? T  F
    //  return !!this.get(key) -------la otra forma es usar el metodo ya creado, pasarle la key y buscar booleano por doble negacion.
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Node,
    LinkedList,
    HashTable,
};