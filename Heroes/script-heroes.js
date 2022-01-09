// Template que agrega cosas desde el portafolio.js
function escribirHTML(objeto) {
    let contenedor = document.querySelector(".heroes");
    const miTemplate = `
    <article>
        <div>
            <img class="vector_corazon" src="./img/Vector.png" alt="heart">
            <img class="fondo" src=${objeto.imgFondoHeroe} alt="fondo">
            <img class="nombre_heroe" src=${objeto.imgHeroe} alt="batman img">
            <h3><span>${objeto.nombreHeroe}</span></h3>
                <p>${objeto.descripcionHeroe}</p>
                <a class="btn-ver-mas" href=${objeto.linkMasInfo} target="_blank">Ver más</a>
        </div>
    </article>
`;
contenedor.innerHTML += miTemplate;
}

// Itera para guaradar cambios
listaHeroes.forEach(item => {
    escribirHTML(item)
})
