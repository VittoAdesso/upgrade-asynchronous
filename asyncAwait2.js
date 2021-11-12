/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */



function getCharacters(id) {

    // let promise = new Promise((resolve) => {
    //     setTimeout(() => resolve("done!"), 1000)
    // });

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        // segunda promesa, donde llamo toda la creación de elementos en dom con su resultado
        // await promise.
        .then(characters => creandoDomJs(characters));
}


// hago un bucle que me genera números de bucles, y me dará ids para que la url me saque contenido... 
function dameIdsParaUrl() {


    for (let i = 1; i < 15; i++) {
        getCharacters(i); // llamo función del fetch para que me agregue cada vez un personaje mas 
    }
}

// aquí creo cada una de los elementos en el html dinámicamente con la llamada del contenido como dicta la api
function creandoDomJs(character) {

    // creo los contenidos y los voy anidando con elementos dom
    const container = document.createElement('div');
    document.body.appendChild(container);

    const listas = document.createElement('ol')
    container.appendChild(listas)

    // comienzo a llamar como me dice la API, que es character. la propiedad .... así me llama todo 
    const nombres = document.createElement('h3');
    nombres.textContent = `${character.name}`;
    container.appendChild(nombres);

    const ids = document.createElement('p');
    ids.textContent = character.id;
    nombres.appendChild(ids);

    const species = document.createElement('p');
    species.textContent = character.species;
    container.appendChild(species);

    const imagenPersonaje = document.createElement('img')
    imagenPersonaje.src = character.image;
    container.appendChild(imagenPersonaje);

};

// aquí debo llamar o dar inicio el bucle for, para genera los ids, que me ayduarán a dar vida y recolectar contenido 

dameIdsParaUrl();