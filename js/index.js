// Arreglo con las rutas de los elementos
let imagesPaths = [
  "./images/ant.jpg",
  "./images/ant.jpg",
  "./images/cat.jpg",
  "./images/cow.jpg",
  "./images/dog.jpg",
  "./images/elephant.jpg",
  "./images/fish.jpg",
  "./images/horse.jpg",
  "./images/lion.jpg",
  "./images/mouse.jpg",
  "./images/pig.jpg",
  "./images/rabbit.jpg",
  "./images/rooster.jpg",
  "./images/tiger.jpg",
  "./images/turtle.jpg",
  "./images/zebra.jpg",
];


let player = {
  name: "sample",
  points: 0,
};
let counter = 0;

// la funcion .map recorre todos los elementos en un arreglo y los cambia conforme a la funcion
// CREA ARREGLO DE IMAGENES
var arrayOfimages = imagesPaths.map((rutaImagen) => {
  var newImg = new Image(100, 100);
  newImg.src = rutaImagen;
  newImg.className = "img-animal";
  return newImg;
});
console.log(arrayOfimages);

//* Temporales
let ImagenSeleccionada;
let NombreImagenSeleccionada;

const divFelicitaciones = document.getElementById("message-success");
const divError = document.getElementById("message-error");
const playerPoints = document.getElementById("PlayerPoints");
// Buttons
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");

const setValueOnButton = (element) => {
  element.innerText();
};

// Contenedor donde es renderizada la imagen
const imgContainer = document.getElementById("imgContainer");

/* Retorna un numero aleatorio con base en alguna longitud dada del arreglo */
function randomNumber(numbero) {
  const numeroElegido = Math.floor(Math.random() * numbero) + 1;
  console.log(`El numero aleatorio es ${numeroElegido}`);
  return numeroElegido;
}

/* Función para obteneer el nombre del animal */
function getNameOfAnimal(animalImage) {
  const src = animalImage.src;
  var name = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf(".jpg"));
  return name;
}



/*
  Recibe un objeto button y comprueba que el nombre sea igual
  al de la imagen seleccionada
*/
function validarNombre(boton) {
  const nombreAnimal = boton.innerText;

  button1.style.pointerEvents= "none";
  button2.style.pointerEvents= "none";
  button3.style.pointerEvents= "none";
  button4.style.pointerEvents= "none";

  if (nombreAnimal === NombreImagenSeleccionada) {  
    player.points++;
    // muestra el cuadro de exito
    divFelicitaciones.style.display = "flex";
  } else {
    player.points--;
    /// muestra el cuadrito de error
    divError.style.display = "flex";
    document.getElementById("error-title").innerText= `Error!!, the name is ${NombreImagenSeleccionada}`;
  }
  playerPoints.value = player.points;

  /// Mover a el boton continuar 
  //RenderizarIMG();

}

/*
  Genera y asigna los nombres a los botones en pantalla
*/
function GenerarNombresBotones(nombreCorrecto) {
  var ArregloDeNombres = [];
  ArregloDeNombres.push(nombreCorrecto);
  for (let index = 0; index <= 2; index++) {
    ArregloDeNombres.push(getNameOfAnimal(arrayOfimages[randomNumber(15)]));
  }

  for (let index = 0; index <= 3; index++) {
    const random = randomNumber(4);

    switch (index) {
      case 0:
        button1.innerText = ArregloDeNombres[index];
        break;
      case 1:
        button2.innerText = ArregloDeNombres[index];
        break;
      case 2:
        button3.innerText = ArregloDeNombres[index];
        break;
      case 3:
        button4.innerText = ArregloDeNombres[index];
        break;
      default:
        break;
    }
  }
}

const initPlay = ()=>{
    document.getElementById("gameContainer").style.display="flex";
    player.name = document.getElementById("playerName").value;
    document.getElementById("titleUser").innerText = `Hello ${player.name} \n What is this?`;
    RenderizarIMG();

}


function RenderizarIMG() {
  var img = arrayOfimages[counter];
  ImagenSeleccionada = img;
  NombreImagenSeleccionada = getNameOfAnimal(ImagenSeleccionada);
  GenerarNombresBotones(NombreImagenSeleccionada);

  img.style.zIndex = 4;
  img.className = "img-animal";
  imgContainer.appendChild(img);
  counter++;  
  
}

function noneFunction (){

}


function btnContinue(){
  cleanIMG();
  //cleanIMG();
  divFelicitaciones.style.display = "none";
  divError.style.display = "none";

  button1.style.pointerEvents= "auto";
  button2.style.pointerEvents= "auto";
  button3.style.pointerEvents= "auto";
  button4.style.pointerEvents= "auto";


  RenderizarIMG();



}

// Borra las imagenes del sitio
function cleanIMG() {
  // Prueba remover elemeto
  const list = document.getElementsByTagName("img");
  for (let index = 0; index < list.length; index++) {
    imgContainer.removeChild(list[index]);
  }
}

initPlay();