

// Arreglo con las rutas de los elementos
let imagesPaths = ["./images/ant.jpg","./images/cat.jpg","./images/cow.jpg","./images/elephant.jpg"];

const imgContainer = document.getElementById("imgContainer");

let counterImages = imagesPaths.length;
let counter = 0;

/*
    la estructura (elemento)=>{} es una funcion anonima
    es como hacer
        function xxxxx(elemento){

        }
    sirve para declarar una función en sitio. El return es para cambiar el valor especifico que se esta procesando
*/

// la funcion .map recorre todos los elementos en un arreglo y los cambia conforme a la funcion
var sample = imagesPaths.map(
    (ELEMENT)=>{
        var newImg = new Image(100,100);
        newImg.src= ELEMENT;
        newImg.className="img-animal";
        newImg.style.zIndex=5;
        console.log(Element);
        return newImg;
    }
);

function smpl(){
    console.log("disparo");
    while(counter<counterImages){
        counter ++;
        var tmpIMG = sample[counter];
        tmpIMG.style.zIndex = counter+5;
        imgContainer.appendChild(tmpIMG);
    }
}



