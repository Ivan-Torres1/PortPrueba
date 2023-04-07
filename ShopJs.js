
function cargarContenido(url){
    var seccion = document.getElementById(url)
    if (seccion) {
        var secciones = document.getElementsByTagName("section")
        for (var i = 0;i < secciones.length; i++){
            secciones[i].style.display = "none";
        }
        seccion.style.display = "flex";
    }
}


var links = document.getElementsByClassName("links")
for( var i = 0; i < links.length;i++) {
    links[i].addEventListener("click",function(evento){
        evento.preventDefault();
        var url = this.getAttribute("data-target");
        cargarContenido(url)
    })
}