'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto 
de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo 
elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento 
y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren 
los mismos resultados pero de manera iterativa.
*/
/*factorial:
 !5 = 5*4*3*2*1 ->120   => tamb se puede expresar como !5 = 5*!4
 !4 = 4*3*2*1   ->24    =>!4 = 4*!3
 !3 = 3*2*1     ->6     =>!3 = 3*!2
 !1 = 1         ->1     
 !0 = 1         ->1
*/
function nFactorial(n) {
  if (n === 0 || n === 1) { // por convencion matematica, sabemos que el factorial de 0 y de 1 es =1
    return 1
  } else { //si nos dan un numero mas grande, debemos aplicar recursividad
    return n * nFactorial(n - 1); //retorna n por el factorial (recursivo) de n-1
  }
}

console.log(nFactorial(3));
console.log(nFactorial(5));
console.log(nFactorial(4));
//-------
//calcular que numero se encuentra en la posicion n  segun fibonacci el grande, el magnanimo..
// 0 1 2 3 4 5 6 7  8  9
// 0 1 1 2 3 5 8 13 21 34
// primero encontra los casos base : en este caso son la posicion 0 y 1
// fib(0)=0
// fib(1)=1
// fib(n)= fib(n-1) + fib(n-2)    <-- esta es la formula a aplicar
function nFibonacci(n) {
  if (n === 0) {
    return 0
  } //podria poner return n  TAMBIEN
  if (n === 1) {
    return 1
  } //podria poner return n  TAMBIEN   "  if(n===0||n===1)return n   "
  else {
    return nFibonacci(n - 1) + nFibonacci(n - 2)
  }
}
//-------------------------------------
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa 
es el primero que se quita. 
Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.array = []
}


Queue.prototype.size = function () {
  return this.array.length
};

var miQueue = new Queue()
console.log(miQueue.size());


Queue.prototype.enqueue = function (value) {
  this.array.push(value) //agrega un elemento a la fila por el ultimo
}

miQueue.enqueue(1)                             //para entrar se puede usar push o unshift
miQueue.enqueue(2)                             // para salir se puede usar shift o pop
miQueue.enqueue(3)
miQueue.enqueue(4)
console.log(miQueue);


Queue.prototype.dequeue = function () { // saca a un elemento por el principio 
  return this.array.shift(); //shift saca un valor y retorna ese valor sacado. cuando el array esta vacio, retorna undefined
}

miQueue.dequeue();
miQueue.dequeue();
console.log(miQueue);
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};