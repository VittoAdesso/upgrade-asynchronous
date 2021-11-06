/* 2.1 Dado el siguiente javascript y html. 
a. Añade la funcionalidad necesaria usando 
fetch() 
b. para hacer una consulta a la api cuando se haga 
c. click en el botón, 
d. pasando como parametro de la api, 
e. el valor del input. */


const baseUrl = 'https://api.nationalize.io';

function traer() {

    const inputBuscado = document.querySelector('#textoCuadro').value;

    /*  `${baseUrl}` */

    fetch(baseUrl) //llamo url mediamte const
        .then(respuesta => respuesta.json()) // me trasnforma la data más legible 
        .then(data => {
            console.log(data);
            document.getElementById("demo").innerHTML = inputBuscado;
        })

}



/* const baseUrl = 'https://api.nationalize.io';

function traer() {

    const inputBuscado = document.querySelector('#textoCuadro').value;

    /*  `${baseUrl}` */

/* fetch(baseUrl) //llamo url mediamte const
    .then(data => data.text()) // imprime tal cual obj arr 
    .then(data => {
        console.log(data);
        document.getElementById("demo").innerHTML = inputBuscado;
    })

} */