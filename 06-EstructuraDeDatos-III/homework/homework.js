'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  //- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  //según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  //Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
  */
function BinarySearchTree(value) {
   //SIZE: RETORNAR LA CANTIDAD TOTAL DE NODOS DEL ARBOL
   this.value = value;
   this.left = null;
   this.right = null;
}
//METODO SIZE

BinarySearchTree.prototype.size = function () {
   //    if (!this.left && !this.right) {
   //       return 1
   //    }
   //    if (!this.left) return 1 + this.right.size();
   //    if (!this.right) return 1 + this.left.size();
   //    if (this.left && this.right) return 1 + this.left.size() + this.right.size(); /**podria ser un else tmb */

   // }
   // COMENTADO PARA VOLVER A HACERLO CON PROFE MAURI

   //quiere retornar =>1+ todo lo de la izq + todo lo de la der..
   //contador arranca en 1 porq se cuenta a si mismo (fitipaldi)
   var count = 1;
   //si tiene algo a la izq arranca y suma todo hacia la izq
   if (this.left) {
      count += this.left.size();
   }
   //si tiene algo a la der arranca y suma todo hacia la der
   if (this.right) {
      count += this.right.size();
   }

   return count;
}

//METODO INSERT

BinarySearchTree.prototype.insert = function (value) {
   if (value < this.value) {
      if (!this.left) {
         this.left = new BinarySearchTree(value)
      } else {
         this.left.insert(vale);
      }
   } else {
      if (!this.right) {
         this.right = new BinarySearchTree(value)
      } else {
         this.right.insert(value)
      }
   }
}

//COMENTADO PARA REHACERLO CON PROFE MAURI
// // 1 - me preg si es mayor o menor y en base a eso se a dnd mirar
// if (value < this.value) {
//    //es menor =debo apuntar a la izq..
//    // 2 - me pregunto si no hay algo,  ... si no hay nada inserto el nodo nuevo
//    if (!this.left) {
//       this.left = new BinarySearchTree(value)
//       return value
//    } else { // 3 - si hay algo, le pregunto al nodo que sigue si es mayor o menor..
//       this.left.insert(value)
//    }
// } else {
//    //es mayor
//    if (!this.right) {
//       this.right = new BinarySearchTree(value)
//       return value
//    } else {
//       this.right.insert(value)
//    }
// }
//}


//METODO CONTAINS 
BinarySearchTree.prototype.contains = function (value) {

   if (value === this.value) return true;
   if (value > this.value) {
      if (this.right === null) return false;
      else {
         return this.right.contains(value)
      };
   };
   if (value < this.value) {
      if (this.left === null) return false;
      else {
         return this.left.contains(value)
      }
   }


}
//COMENTADO PARA REAHACERLO CON PROFE MAURI
//    // if (value === this.value) {
//    //    return true
//    // } else {
//    //    return false
//    // }
//    // //LO CORRECTO ERA ESTO: 
//    // if(this.value===value) return true; // le pregunta al nodo base si el valor es igual
//    // if ( this.left && this.left.contains(value)) return true; // le pregunta al de la izq si es igual y 
//    // //                                                             repite lo mismo para toda la izq
//    // if(this.right && this.right.contains(value))return true; // le pregunta al de la der si es igual y 
//    // //                                                          repite para toda la der
//    /////////     Y PARA HACER MAS EFICIENTE:                    //////////////////////////// 
//    if (this.value === value) return true; // le pregunta al nodo base si el valor es igual
//    /*le pregunta si value es menor que this.value, si la respuesta es negativa directamente no avanza hacia la izq */
//    if (value < this.value && this.left && this.left.contains(value)) return true;
//    /*y para a la derecha y hace lo mismo, primero pregunta si es mayo y continua con el condicional. */
//    if (this.right > vale && this.right && this.right.contains(value)) return true;
//    return false;
// }

// METODO DEPTHFIRSTFOREACH

BinarySearchTree.prototype.depthFirstForEach(cb, order)
   //post ORDEN
   if (order === "post-order") {
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
   }
   //pre order
   else if (order === "pre-order") {
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
   }
   //IN order
   else {
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
   }


//COMENTADO PARA REHACERLO CON PROFE MAURI
//    if (cb === "post-order") {
//       //POST ORDER : IZQ DER NODO
//       this.left.depthFirstForEach(cb);
//       this.right.depthFirstForEach(cb);
//       cb(this.value);
//    } else if (cb === "pre-order") {

//       //PRE ORDER : NODO IZQ DER
//       cb(this.value);
//       this.left.depthFirstForEach(cb);
//       this.right.depthFirstForEach(cb);
//    } else {
//       // IN ORDER : IZQ NODO DER
//       this.left.depthFirstForEach(cb);
//       cb(this.value);
//       this.right.depthFirstForEach(cb);
//    }
// }
// - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

// METODO BREADTHFIRSTFOREACH

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queu = []
   /*para mantener el valor 
   lo podemos acumular en el return */
) {
   if (this.left) {
      queu.push(this.left);
   }
   if (this.right) {
      queu.push(this.right)
   }
   cb(this.value);
   if (queu.length > 0) {
      let objTreeFirst = queu.shift();
      objTreeFirst.breadthFirstForEach(cb, queu); // ver min 1.50 de CodeReview
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};