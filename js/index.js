
// Arreglo con las rutas de los elementos
let imagesPaths = ["./images/ant.jpg",
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
                    "./images/zebra.jpg",];
                    
// Contenedor donde es renderizada la imagen
const imgContainer = document.getElementById("imgContainer");


/* Retorna un numero aleatorio con base en alguna longitud dada del arreglo */
function randomNumber(arrayLetgh){
    const number = Math.floor(Math.random()* (arrayLetgh + 1));
    console.log(`El numero aleatorio es ${number}`);
    return number();
}




// la funcion .map recorre todos los elementos en un arreglo y los cambia conforme a la funcion
// CREA ARREGLO DE IMAGENES
var arrayOfimages = imagesPaths.map(
    (ELEMENT)=>{
        var newImg = new Image(100,100);
        newImg.src= ELEMENT;
        newImg.className="img-animal";                
        return newImg;
    }
);
console.log(arrayOfimages);





/* Función para obteneer el nombre del animal */
function getNameOfAnimal(animalImage){    
    const src = animalImage.src;   
    var name = src.substring(
        src.lastIndexOf("/")+1,
        src.lastIndexOf(".jpg")
    );
    return name;
}


for (let index = 0; index < arrayOfimages.length; index++) {
    var name1 = getNameOfAnimal(arrayOfimages[index]);    
    console.log(name1);
}


