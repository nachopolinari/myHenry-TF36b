//Una CLOSURE es una funcion dentro de otra funcion que tiene acceso a variables del contexto padre donde se definio.
//1- la funcion debe estar dentro de una funcion (anidadas)
//2- la funcion padre debe tener una variable con la que la funcion hija va a interactuar(recordando esta variable a pesar de estar fuera de su contexto)
//3- la funcion padre debe retornar la funcion hija siempre.

//ejemplo contador
function incrementar() {
    let count = 1
    return function () {
        return coun++
    }
}

console.log(incrementar())

const incrementar1 = incrementar()
console.log(incrementar())
console.log(incrementar())
console.log(incrementar())

//----------------------------------
// ejempl tabla de multiplcar
function multTable(a) {
    return function (b) {
        return a * b
    }
}

const multDe5 = multTable(5)

console.log(multDe5(3));
console.log(multDe5(5))

const multDe9 = multTable(9)
console.log(multDe9(2))
//-------------------------
// ejemplor de memoria cache
function cacheMemory(cache = {}) {
    return function (key, value) {
        cache[key] = value
        return cache
    }
}

const cache1 = cacheMemory()
console.log(cache1("nombre", "Marcos"));
console.log(cache1("nom", "Franco"));
console.log(cache1("apellido", "Polinari"));
console.log(cache1("apel", "Ferreyra"));
//si las key que va recibiendo son iguales las va reescribiendo por ser un objeto lo que retorna

//-------------------------------
// ejemplo cache2 con mas logica (add,delete)
function cacheMemory2(cache = {}) {
    return function (addDelete, key, value) {
        if (addDelete === "add") {
            cache[key] = value
        }
        if (addDelete === "delete") {
            if (cache.hasOwnProperty(key)) {
                delete cache[key]
            }
        }
        return cache;
    }
}

const cache2 = cacheMemory2()
console.log(cache2("add", "nombre", "Marcos"));
console.log(cache2("add", "segundo nombre", "Javier"));
console.log(cache2("add", "apellido", "Polinari"));
console.log(cache2("delete", "segundo nombre", "Javier"));

//---------------------------
// ejemplo otra closures

function one() {
    const array = []
    const obj = {}

    return function two(value) {
        array.push(value)
        return array
    }
}

var ejemplo = one()

//---------------------------------
// otro ejemplo saludar

function saludar(saludo) {
    return function (nombre) {
        console.log(saludo + '' + nombre);
    }
}

var saludarHola = saludar('hola')
var despedir = saludar('chau')

saludarHola('Pedro')
despedir('Marcos')


//------------------------------------
// ver Bind, Call y Apply
//-------------------------------------
// Clases