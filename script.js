
// Template que agrega cosas desde el portafolio.js
function escribirHTML(objeto) {
    let contenedor = document.querySelector(".contenedor");
    const miTemplate = `
    <div class="item animado">
    <p><a href=${objeto.urlProyecto} target="_blank">${objeto.titulo}</a></p>
    </div>
    `;
    contenedor.innerHTML += miTemplate;
}

// Itera para guaradar cambios
portafolio.forEach(item => {
    escribirHTML(item)
})

