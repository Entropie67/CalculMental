
// Difficulté fixe à 53
const max = 53;
const min = 13;

// Multiplication

function generationCouple(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    a = Math.floor(Math.random() * (max - min +1)) + min;
    b = Math.floor(Math.random() * (max - min +1)) + min;
    return {nombre1: a, nombre2: b};
}

var nombres = generationCouple(min, max);

var nombre1 = document.querySelector(".nombre1");
nombre1.innerHTML = nombres.nombre1 + "</br>" + nombres.nombre2;