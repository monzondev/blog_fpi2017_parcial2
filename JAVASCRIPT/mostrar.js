function publicar4(vector){
    var loc = document.location.href;
    console.log(loc);
    
    var idurl = loc.split('=')[1];
    alert("el id es:"+ idurl);

    console.log("entro");
    console.log(vector[0].identificador);
    for (var i = vector.length-1 ;i>= 0; i--) {
      if (vector[i].identificador==idurl) {


      texto=vector[i].publicacion;

      var capa= document.getElementById("capa");

      var h1= document.createElement("h1")
      h1.innerHTML=vector[i].titulo;
      capa.appendChild(h1);

      var imagen = document.createElement("img");
      imagen.setAttribute("src", vector[i].imagen);
      imagen.setAttribute("class", "imagenes");
      capa.appendChild(imagen);

      var p = document.createElement("p");
      p.innerHTML = texto;
      p.setAttribute("id", "contArt")
      capa.appendChild(p);

      var h5 = document.createElement("h5");
      h5.innerHTML = vector[i].author;
      capa.appendChild(h5);

      var h6 = document.createElement("h6");
      h6.innerHTML = vector[i].fecha;
      capa.appendChild(h6);

      var a = document.createElement("a");
      a.innerHTML = "Ver publicacion";
      a.setAttribute("href", "mostrarArti.html");
      a.setAttribute("onclick","cargar('"+vector[i].identificador+"')");
      capa.appendChild(a);
    }
    }
}

