// Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná que será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor. : 
// En JavaScript, la principal diferencia entre declarar una variable con var y asignarle un valor directamente es el ámbito (scope) de la variable.
// Al declarar una variable con var, se crea una variable que es accesible dentro de la función en la que se declara. Si se declara una variable con var fuera de una función, esta variable se convierte en una variable global, que es accesible en todo el ámbito del programa.
// Por otro lado, al asignar un valor directamente a una variable sin declararla previamente con var, se crea una variable global automáticamente. Esto puede provocar problemas de ámbito y dificultar el mantenimiento del código, ya que las variables globales pueden ser modificadas y accedidas desde cualquier parte del programa.
// Por lo tanto, es recomendable declarar todas las variables con var, let o const antes de asignarles un valor, para evitar problemas de ámbito y mejorar la claridad y legibilidad del código.

// ```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {

    var x = 10;
    console.log(x); //10 porq "var x=10" esta modificando el valor de "x=1"
    console.log(a); //8  porq viene por parametro

    var f = function (a, b, c) {  // LE PASA los mismos parametros que function c
        b = a;     // ->8
        console.log(b); //5 porq al declarar b = a sin "var" la hace variable global directamente   (todos dicen 8 y tenian razon)
        b = c; //->10
        var x = 5;
    };


    f(a, b, c); //llama a la funcion f
    console.log(b); //9 porq  este log esta fuera de "function f" ; osea pide "b" dentro de " function c" que viene por parametro.

};

c(8, 9, 10); // llama a function c
console.log(b); //10 porq pide el valor de "var b =10" de la linea 16
console.log(x); //1   porq busca en el scope global


//javascript
console.log(bar); //1 porq el "var bar =1" le da prioridad por hoisting     (los demas dicen undefined)
console.log(baz); // 2   (los demas dicen undefined) ->da error porq no esta declarado aun "baz"
foo(); // "Hola!" 

function foo() {
    console.log('Hola!'); 
}
var bar = 1;
baz = 2;
// ```

// ```javascript
var instructor = 'Tony';
if (true) {
    var instructor = 'Franco';
}
console.log(instructor);  // "Tony"   (corregir a "Franco")
 // ```

// ```javascript
var instructor = 'Tony';
console.log(instructor); // "Tony"
(function () {
    if (true) {
        var instructor = 'Franco';
        console.log(instructor);  //"Franco"
    }
})();
console.log(instructor); //"Tony"
// ```

// ```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
    var instructor = 'The Flash';
    let pm = 'Reverse Flash';
    console.log(instructor); // "The Flash"
    console.log(pm); // "Reverse Flash"
}
console.log(instructor); // "Tony"  (corregir "The Flash")
console.log(pm); // "Franco"
// ```

// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// ```javascript
6 / "3" // 2  -> lo convierte en num
"2" * "3" // 6 
4 + 5 + "px" // "9px" -> suma 4+5 y luego lo convierte en str y concatena "px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // undefined o infinity ?
{}[0] // undefined porq el objeto esta vacio (algunos dicen cero)
parseInt("09") // 9 (num)
5 && 2    // 2 
2 && 5   // 5 
5 || 0  // 5
0 || 5 // 5
[3]+[3]-[10] // 23 -> concatena 33 -10
3>2>1 // false -> 3>2 true >1 ==false  
//[] == ![]  //true
// ```

// > Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

// ```javascript
function test() {
    console.log(a); // undefined
    console.log(foo()); // 2

    var a = 1;

    function foo() {
        return 2;
    }
}

test(); // 1 2 recorre la funcion dos veces. en la primera no tiene los valores a y foo() pero en la segunda(luego de la llamada) si.
// ```

// Y el de este código? :

// ```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // "Meow Mix"  porq todo el if queda invalidado (corregir a undefined porq var snack dentro del if sube por hoisting y cambia snack)
// ```

// ### This

// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// ```javascript
var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        },
    },
};

console.log(obj.prop.getFullname()); //'Aurelio De Rosa'

var test = obj.prop.getFullname;  // undefined

console.log(test()); 
// ```

// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// ```javascript
function printing() {
    console.log(1);

    setTimeout(function () {
        console.log(2);
    }, 1000);

    setTimeout(function () {
        console.log(3);
    }, 0);
    console.log(4);
}

printing(); //  1   4  3  2
// ```