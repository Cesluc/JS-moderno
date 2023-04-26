

// async - await

// const getImagenPromesa = () => new Promise (resolve => resolve('https://www.google.com'));
// getImagenPromesa().then(console.log);
// Ejemplo
// const getImagen = async () => 'https://www.google.com';

// getImagen().then(console.log)

// const apiKey = 'GP4RRrdWceYK62YaJR6yUZpwXMeMnn87';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn) 

// Ejemplo con Fetch api

const getImagen = async () => {

    try {
        const apiKey = 'GP4RRrdWceYK62YaJR6yUZpwXMeMnn87';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del error
        console.error(error)
    }


}

getImagen();