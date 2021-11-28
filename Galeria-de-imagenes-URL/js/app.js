let imagenes = [];

//solicitamos las imagenes
for(let i=0; i<3 ;i++){
    let url = prompt("ingrese la url de una imagen");
    imagenes.push(url);
}

//utilizar los links para rellenar los SRC de cada imagen
const nodosImg = document.querySelectorAll('.imagen');

for(let i=0; i<imagenes.length; i++){
    nodosImg[i].setAttribute('src', imagenes[i]);

    //armo el nodo de un parrafo completo
    let nodoItem = document.createElement('li');
    let texto = document.createTextNode(imagenes[i]);
    nodoItem.appendChild(texto);
    
    //selecciono la caja de parrafos
    const cajaParrafos = document.querySelector('.parrafos');
    
    //inserto el parrafo dinamico en el dom
    cajaParrafos.appendChild(nodoItem);
}

