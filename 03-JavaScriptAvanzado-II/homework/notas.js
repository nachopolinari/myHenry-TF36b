//una clousure es una funcion que tiene acceso a variables de su contecto donde se definio
//1- la funcion debe estar dentro de una funcion (anidadas)
//2- la funcion padre debe tener una variable
//3- la funcion que esta dentro debe interactuar con la variable de la fncion padre que esta fuera de ella


function one(){
    const array=[]
    const obj={}

    function two(value){
        array.push(value)
        return array
    }
    return two()
}

var ejemplo = one()

//---------------------------------

function saludar (saludo){
    return function(nombre){
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


