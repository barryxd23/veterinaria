var imagenes = new Array(
    "../imgs/img1.jpg",
    "../imgs/img2.jpg",
    "../imgs/img3.jpg",
    "../imgs/img4.jpg"
);

var c = 0;
var ciclo = 0;

function carrusel(){
    document.getElementById("img-banner").src=imagenes[c]
    c++;
    if(c >= imagenes.length) c=0;
    ciclo = setTimeout("carrusel()", 2000);
}

function agrandar(e){
    e.setAttribute("style", "transform: translateY(-15px); box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); transition: 0.8s ")
}

function normal(e){
    e.setAttribute("style", "transform: translateY(0px); transition:0.8s");
}

function cambiarColor(e){
    e.setAttribute("style", "background:#409443;transition:0.5s");
}

function volverColor(e){
    e.setAttribute("style", "background:#4caf50;transition:0.5s");
}


document.body.setAttribute("onload", "carrusel()");