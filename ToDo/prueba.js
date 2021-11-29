/* let nombre = 'Pedro';
function mostrarNombre(nombre){
    if(nombre !== undefined){
        'Tu nombre es' + ' ' + nombre;
    }
}

mostrarNombre('Juan');
console.log(nombre); */

/* var num = 10;
while(num){
    alert(num)
} */

for (var i = 0; i < 10; i++) {
    var count = 0;
    for (var i = 0; i < Math.floor(Math.random() * 10); i++) {
        count++;
    }
    console.log(count);
}
