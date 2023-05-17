/*
¡Bienvenidas y bienvenidos a nuestro primer desafío!

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!
*/
function mostrar(){
    document.getElementById("fondo").style.display = "none";
    document.getElementById("consola").style.display = "inline-block";
}

function ocultar(){
    document.getElementById("consola").style.display = "none";
    document.getElementById("fondo").style.display = "inline-block";
}

function encriptar(){
    var entrada = document.getElementById("campito").value;
    var secreto = entrada.replaceAll("e","enter");
    secreto = secreto.replaceAll("i","imes");
    secreto = secreto.replaceAll("a","ai");
    secreto = secreto.replaceAll("o","ober");
    secreto = secreto.replaceAll("u","ufat");
    document.getElementById("consolita").value = secreto;
    mostrar();
}

function desEncriptar(){
    var codificado = document.getElementById("campito").value;
    var mensaje = codificado.replaceAll("ufat","u");
    mensaje = mensaje.replaceAll("ober","o");
    mensaje = mensaje.replaceAll("ai","a");
    mensaje = mensaje.replaceAll("imes","i");
    mensaje = mensaje.replaceAll("enter","e");
    document.getElementById("consolita").value = mensaje;
    mostrar();
}

function copiarConsola(){
    var portapapeles = document.getElementById("consolita").value;
    document.getElementById("campito").value = portapapeles;
    ocultar();
}