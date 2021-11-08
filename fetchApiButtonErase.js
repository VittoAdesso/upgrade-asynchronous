/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
de los p que hayas insertado y que si el usuario hace click en este botón
eliminemos el parrafo asociado. */

// iteraciòn 1.3

const nameApi = 'https://api.agify.io?name=michael'


const lineasP = document.createElement('p');
lineasP.id = "lineasJuego";
lineasP.textContent = 'PRUEBA ';
document.body.appendChild(lineasP);
const buttonX = document.createElement('button');
buttonX.textContent = "X";
buttonX.addEventListener('click', removeElement);
lineasP.appendChild(buttonX);

const lineasP2 = document.createElement('p');
lineasP2.id = "lineasJuego2";
lineasP2.textContent = 'PRUEBA 2';
document.body.appendChild(lineasP2);
const buttonX2 = document.createElement('button');
buttonX2.textContent = "X2";
buttonX2.addEventListener('click', removeElement);
lineasP2.appendChild(buttonX2);



// con document.getElementById() si me elimina justo el que yo quierooo...


function removeElement() {


    var select = document.querySelector('p'); // así me elimina el primero y despues el segundo .... 
    select.parentNode.removeChild(select);




}


fetch(nameApi)
    .then(respuesta => respuesta.json()) // me trasnforma la data más legible 
    .then(data => {

        document.querySelector('button').innerHTML = data;


    })