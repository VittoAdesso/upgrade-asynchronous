/* 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await. */


// le digo que sincronice todo lo que tengo en función 
const runTimeOut = async() => {
    const promise = new Promise((resolve) => {
            setTimeout(function() {
                resolve();
            }, 2000);

        })
        // espere por el timer de arriba y ejecute 
    await promise.then(() => { console.log('Time is going out!') }) // después de 2 seg aparece el console log

    // anido otro timer para que después de timeout 1, me recuente y me espere a los otros 3 seg 
    const promise2 = new Promise((resolve) => {
        setTimeout(function() {
            resolve();
        }, 3000);

    })
    await promise2.then(() => { console.log('Time out!') })
};

runTimeOut();