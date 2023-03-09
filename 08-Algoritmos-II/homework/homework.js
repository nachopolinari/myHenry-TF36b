'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //En elQUICK SORT ordenamos mientras dividimos el array
  //1° elegi un elemento de la lista que va a ser de pivote, (conviene que sea el primero o el ultimo)
  //2° a partir de ahi vamos a distribuir los elementos en un array que representa la izq y otro que representa la derecha
  //3° devolver la izq ordenada + el pivote + la derecha ordenada
  //4° como ordeno la izq ?  con la misma funcion, RECURSIVIDAD . 
  //      quickSort(izq)+pivote+quickSort(der)
  //lo primero que me anoto en comentario es "que hace mi funcion? ORDENA UN ARRAY"
  //lo segundo: cual es mi caso de corte? cuando no puedo seguir? CUANDO tengo un solo elemento en el array.. pq no hay nada que ordenar..

  if (array.length <= 1) return array;
  var pivote = array.shift() /*array[0]*/
  /*elijo pivote (el primero o el ultimo)- puede ser la primer posicion "array[0]" 
                                          o array.shift(en este caso,saca la posicion cero del array para que luego no estorbe)*/
  var izq = [] // armo array izq vacio que voy a ir llenando
  var der = [] // armo array der vacio que voy a ir llenando

  for (let i = 0; i < array.length; i++) { //recorro el array (el pivote ya no está)
    if (array[i] < pivote) izq.push(array[i]) //si el array de [i] es menor que el pivote, pushear las posiciones [i]del array hacia el array izq
    else der.push(array[i]); //sino pushear las posiciones i del array en el array der
  }
  return quickSort(izq).concat(pivote).concat(quickSort(der)) //aplico mi formula quickSort(izq ) para ordenar este array que quedo a la izq
  //                                                        //    para sumarlos  los concateno con pivote y luego concateno con quickSort(der) 
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  //En el MERGE SORT dividimos el array hasta mas no poder y ahi recien empezamos a ordenar los array mas pequeños
  if (array.length <= 1) return array //caso base: si el array tiene 1 elemento retornalo(no se puede dividir)


  // 1° quiero dividir el array en dos
  // tengo una mitad
  //tengo otra mitad
  //cuando tengo las dos mitades las junto ordenandose!!! 
  //quiero hacer un MERGE de las dos mitades

  var arrayDividido = dividir(array) //con la funcion dividir obtengo las dos mitades
  var mitad1 = arrayDividido[0]
  var mitad2 = arrayDividido[1]

  return juntar(mergeSort(mitad1), mergeSort(mitad2))

  function dividir(arr) {

    var midIndex = Math.ceil(arr.length / 2) //divido el array en 2-como es un array no me puede dar un resultado decimal..aplico:
    //                                         el metodo math.ceil me da el numero entero mas cercano.
    //                                              tamb puede ser el metodo math.floor que lo redondea hacia abajo
    var mitad1 = arr.slice(0, midIndex); //guardo las dos mitades por separado aplicando metodo slice
    var mitad2 = arr.slice(midIndex); //devuelve una copia de una parte del array dentro de un nuevo array. El array original no se modificará.
    return [mitad1, mitad2]; //retorno las dos mitades (ver arrayDividido)
  }

  //quiero mergear o juntar mergeSort(mitad1) con mergeSort(mitad2), ordenandolos!! 
  function juntar(arr1, arr2) {
    var aux = [] //-> var auxiliar que es un array para juntar luego de ordenarlos
    var i = 0
    var j = 0

    //ESTE WHILE ESTA COMPARANDO Y ORDENANDO LOS DOS ARRAYS MITADES mitad1 y mitad2
    while (i < arr1.length && j < arr2.length) { // mientras tenga para recorrer en ambos array <- recordar q estos son mitad1 y mitad2
      if (arr1[i] < arr2[j]) { // si la posicion[i]de arr1 es  menor que la posicion[i] de arr2
        aux.push(arr1[i]) //pusheame la posicion[i]de arr1 dentro del array aux
        i++ // sumale una posicion para avanzar en el array 
      } else {
        aux.push(arr2[j]) //sino pusheame la posicion[i] de arr2 dentro del array aux..
        j++ //sumale una posicion para avanzar en el array
      }
    }
    return aux.concat(arr1.slice(i)).concat(arr2.slice(j)); //retorno la var aux (array ordenado)con lo que me pudo haber sobra en los otros arrays
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};