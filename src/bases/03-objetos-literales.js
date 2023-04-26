const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 552221,
        lat: 14.32,
        lng: 34.92
    }
};

console.table(persona);
console.log(persona);

const persona2 = { ...persona };

persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);
