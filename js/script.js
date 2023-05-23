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
        if (entrada === '') {
            alert('No hay texto');
        }
        else{
            var secreto = entrada.replaceAll("e","enter");
            secreto = secreto.replaceAll("i","imes");
            secreto = secreto.replaceAll("a","ai");
            secreto = secreto.replaceAll("o","ober");
            secreto = secreto.replaceAll("u","ufat");
            document.getElementById("consolita").value = secreto;
            mostrar();
        }
}

function desEncriptar(){
    var codificado = document.getElementById("campito").value;
        if (codificado === '') {
            alert('No hay texto');
        }
        else{
            var mensaje = codificado.replaceAll("ufat","u");
            mensaje = mensaje.replaceAll("ober","o");
            mensaje = mensaje.replaceAll("ai","a");
            mensaje = mensaje.replaceAll("imes","i");
            mensaje = mensaje.replaceAll("enter","e");
            document.getElementById("consolita").value = mensaje;
            mostrar();
        }
}

function copiarConsola(){
    var portaPapeles = document.getElementById("consolita");
    portaPapeles.select();
    document.execCommand('copy');
    ocultar();
}

var oscuro = true;

function dia(){
    document.getElementById("agente").src = "./recursos/incognito-b.svg";
    document.getElementById("exclamacion").src = "./recursos/exclamacion-b.svg";
    oscuro = false;
}

function noche(){
    document.getElementById("agente").src = "./recursos/incognito-w.svg";
    document.getElementById("exclamacion").src = "./recursos/exclamacion-w.svg";
    oscuro = true;
}

function diaNoche(){
    var paginaEncriptador = document.body;
    paginaEncriptador.classList.toggle("claro");
    oscuro ? dia() : noche();        
}