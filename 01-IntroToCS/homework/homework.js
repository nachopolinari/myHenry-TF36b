'use strict';

function BinarioADecimal(num) {
  console.log(num);

  /* expect(BinarioADecimal('10')).toBe(2);=> voy a recibir el string "10" y retornar el num 2
  
    expect(BinarioADecimal('111')).toBe(7);=> voy a recibir el string "111" y retornar el num 7
  */
  //sumatoria
  //recorrer el binario invertido
  //la formula para pasar de digito a binario es       num *2 elevado al indice (al reves)
  //dar vuelta el numero para recorrerlo
  var binary = num.split("").reverse().join("") //split es un metodo que separa el string y lo devuelve como array // reverse es un metodo de array que lo devuelve al reves //  join lo junta de nuevo
  var suma = 0;

  for (let i = 0; i < binary.length; i++) {
    
    //aplicar la formula , retornarlo sumado y guardarlo en la variable "suma"
    suma += binary[i] * 2 ** i
  }

  return suma //retornar suma
}

function DecimalABinario(num) {
  /*
      expect(DecimalABinario(4)).toBe('100'); => voy a recibir num 4 y debo retornar string "100"
    
      expect(DecimalABinario(7)).toBe('111');=> voy a recibir num 77 y debo retornar string "111"
  */
  //dividir el numero hasta que nos quede 0(mientras tengo algo mayor a cero, dividir)
  //ir tomando en cada paso el modulo
  //ese modulo(1,0) tengo que ir uniendolo con todos los demas
  //finalmente retornar el binario
  var binary = ""

  while (num > 0) { //mientras num sea mayor a cero recorrer, despues salir
    var digito = num % 2; //digito es el modulo o resto de dividir num sobre 2 

    num = Math.floor(num / 2) //Math.flor me redondea los numeros hacia abajo  luego de hacer la division num / 2
  
    //en cada recorrido del while, saco el modulo y lo guardo en digito, modifico el num diviendolo por dos(redondenado), guardo en binary el resultado ,   vuelve a empezar el while..

    binary = digito + binary //en cada recorrido acumulo el resultado "digito" en la var "binary" que js lo convierte automat en string
  }
  return binary

}

BinarioADecimal("10");
BinarioADecimal("111");

DecimalABinario(4)



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};