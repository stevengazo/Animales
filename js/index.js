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

// Contenedor donde es renderizada la imagen
const imgContainer = document.getElementById("imgContainer");

/* Retorna un numero aleatorio con base en alguna longitud dada del arreglo */
function randomNumber(arrayLetgh) {
  const number = Math.floor(Math.random() * (arrayLetgh + 1));
  console.log(`El numero aleatorio es ${number}`);
  return number();
}

// la funcion .map recorre todos los elementos en un arreglo y los cambia conforme a la funcion
// CREA ARREGLO DE IMAGENES
var arrayOfimages = imagesPaths.map((ELEMENT) => {
  var newImg = new Image(100, 100);
  newImg.src = ELEMENT;
  newImg.className = "img-animal";
  return newImg;
});
console.log(arrayOfimages);

/* Función para obteneer el nombre del animal */
function getNameOfAnimal(animalImage) {
  const src = animalImage.src;
  var name = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf(".jpg"));
  return name;
}

// Prueba Impresión de Nombres de animales
for (let index = 0; index < arrayOfimages.length; index++) {
  var name1 = getNameOfAnimal(arrayOfimages[index]);
  console.log(name1);
}

let counter = 0;
let orderFlag = false;
function onclickSample() {
  var img = arrayOfimages[counter];
  if (counter < 16 || !orderFlag) {
    img.style.zIndex = 5;
    img.className = "img-animal";
    imgContainer.appendChild(img);
    console.log(
      `Objeto agregado a ${imgContainer}, imagen ${arrayOfimages[counter]}`
    );
    orderFlag = false;
    counter++;
  } else if (counter > 16) {
    counter--;
    orderFlag = true;
    img.style.zIndex = 5;
    img.className = "img-animal";
    imgContainer.appendChild(img);
    console.log(
      `Objeto agregado a ${imgContainer}, imagen ${arrayOfimages[counter]}`
    );
  } else if (orderFlag) {
    counter--;
    orderFlag = true;
    img.style.zIndex = 5;
    img.className = "img-animal";
    imgContainer.appendChild(img);
    console.log(
      `Objeto agregado a ${imgContainer}, imagen ${arrayOfimages[counter]}`
    );
  }
}

function cleanIMG() {
  // Prueba remover elemeto
  const list = document.getElementsByTagName("img");
  for (let index = 0; index < list.length; index++) {
    imgContainer.removeChild(list[index]);
  }
}
