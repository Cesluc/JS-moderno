
// Funciones JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("cesar"));
console.log(saludar2("goku"));

const getUser = () => ({
    uid: 'ABCD',
    username: 'Cesar123',
});

const user = getUser();

console.log(user);

// Tarea

const usuarioActivo = (nombre) => ({
    uid: 'ABCD34',
    username: nombre,
});

console.log(usuarioActivo("Andres18"))