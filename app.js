// seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColor() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColor();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
});