/* 2.3 En base al ejercicio anterior.Crea dinamicamente un elemento por cada petición
a la api que diga...
'El nombre X tiene un Y porciento de ser de Z'
etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
de MZ. */

const nameApi = 'https://api.agify.io?name=michael'

const a = document.createElement('ul');
const b = document.createElement('li');
a.appendChild(b);
document.body.appendChild(a); // para decirle que es hijo del body general

fetch(nameApi)
    .then(respuesta => respuesta.json()) // me trasnforma la data más legible 
    .then(data => {
        console.log(data);
        // document.querySelector('ul') // .innerHTML = data.name;
        document.querySelector('li').innerHTML = data.name;
    })