let confirmaCambios = confirm('Querés cambiar el color del título?');

if(confirmaCambios) {

let titulo = document.querySelector('h1');
titulo.innerHTML += ' Soy un contenido nuevo desde JS';
titulo.style.color = 'crimson';
titulo.style.fontSize = '50px';
}
