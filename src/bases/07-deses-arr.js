
const personjes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personjes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea

const useStatef = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo')
    }];
}

const [nombre, setNombre] = useStatef('Goku');


console.log(nombre);
setNombre();