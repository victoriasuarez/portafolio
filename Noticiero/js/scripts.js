function escribirHTML(objeto) {
  let contenedor = document.querySelector(".contenedor");
  const miTemplate = `
  <div class="item">
  <img src=${objeto.imgUrl} alt=${objeto.createdAt}>
  <h2>${objeto.titulo}</h2>
  <h6>${objeto.fecha}</h6>
  <p>${objeto.descripcion}</p>
  </div>
  `;
  contenedor.innerHTML += miTemplate;
}

noticias.forEach(item =>{
escribirHTML(item)
})

function checkNacionalidad() {
  let noticiaLista = document.querySelectorAll("main div")
  for (let i = 0; i < noticiaLista.length; i++) {
      if (!noticias[i].tipoNacional) {
          noticiaLista[i].classList.add("Internacional");
      }
    }
}

checkNacionalidad();