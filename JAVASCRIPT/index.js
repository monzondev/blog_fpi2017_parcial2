function formRegistro() {
    window.location.replace("registro.html");
}
function formingreso() {
    window.location.replace("inicioSesion.html");
}
function mostrar() {
    window.location.replace("index.html");
}
function publicar() {
    window.location.replace("EscribirPublic.html");
}
function categoria() {
    window.location.replace("categoria.html");
}
function proceso() {
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("cerrar").style.display = "block";
    document.getElementById("nueva").style.display = "block";
}
function inverso() {
    document.getElementById("iniciar").style.display = "block";
    document.getElementById("registrarse").style.display = "block";
    document.getElementById("cerrar").style.display = "none";
    document.getElementById("nueva").style.display = "none";
}
function mostrarpu() {
    window.location.replace("mostrarArti.html");

}
var url1 = verificadorURL();
//if (url1 == 1 || url1 == 2) {
    function tiempo() {
        var tiempo;
        var horas;
        var segundos;
        var minutos;
        var dia;
        var mes;
        var ao;
        tiempo = new Date();
        horas = tiempo.getHours();
        minutos = tiempo.getMinutes();
        segundos = tiempo.getSeconds();
        ao = tiempo.getFullYear();
        mes = tiempo.getMonth();
        dia = tiempo.getDate();
        if (url1 == 1) {
            if (localStorage.getItem("user") == undefined) {
                window.location.replace("404.html");
            } else {
                publicacion(ao, mes, dia, horas, minutos, segundos);
            }
        } else {
            usuarios(ao, mes, dia, horas, minutos, segundos);
        }
    }

//}

if (url1 == 1 || url1 == 2) {
    window.onload = function verificar2() {
        tiempo();
    if (localStorage.user != undefined) {
        proceso();
    } else {
        inverso();
    }}
} else {
    window.onload = function verificar() {
        llamarPublicaciones(url1);
    if (localStorage.user != undefined) {
        proceso();
    } else {
        inverso();
    }
};
}

function publicacion(ao, mes, dia, horas, minutos, segundos) {
    var identificador;
    var autor = localStorage.getItem("user");
    document.getElementById("autor").value = autor;
    document.getElementById("tiempo").value = horas + ':' + minutos + ':' + segundos;
    document.getElementById("autor").style.display = "none";
    document.getElementById("tiempo").style.display = "none";
    document.getElementById("identificador").style.display = "none";
    identificador = ao + "" + (mes + 1) + "" + dia + "" + horas + "" + minutos + "" + segundos;
    document.getElementById("identificador").value = identificador;

}
;
function usuarios(ao, mes, dia, horas, minutos, segundos) {
    var identificador;
    identificador = ao + "" + (mes + 1) + "" + dia + "" + horas + "" + minutos + "" + segundos;
    document.getElementById("iusuario").value = identificador;
}

function cerrar() {
    alert("Cerrado sesion :" + localStorage.getItem("user"));
    localStorage.removeItem("user");
    mostrar();
}
function verificadorURL() {
    var url = document.location.href;
    var inicio = url.lastIndexOf("/");
    var final = url.lastIndexOf("l");
    var loc = url.substring(inicio,final);
    console.log(loc);
    if (loc == "/EscribirPublic.htm") {
        return contr = 1;
    } else if (loc == "/registro.htm") {
        return contr = 2;
    } else if (loc == "/categoria.htm") {
        return contr = 3;
    }else if(loc == "/mostrarArticu.htm"){
        return contr = 4;
    }
    return;
}
function llamar(id){
    var url4 = "categoria.html?id=";
    url4 = url4+id;
     
      location.href=url4;
}

function descubrir(){
  document.getElementById("pass").setAttribute("type", "text");

}
function descubrir2(){
  document.getElementById("confirmpass").setAttribute("type", "text");

}
function cubrir(){
  document.getElementById("pass").setAttribute("type", "password");

}
