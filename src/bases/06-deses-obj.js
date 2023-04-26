// Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado',
}

// const { nombre: nombre2 } = persona;
// const { edad, nombre, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ clave, nombre, edad, rango = 'Captain' }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.862,
            lng: -63.215,
        },
    }
}

const avenger = retornaPersona(persona);
// console.log(avenger)
const { nombreClave, anios, latlng: { lat, lng } } = avenger;
console.log(nombreClave, anios)
console.log(lat, lng);
