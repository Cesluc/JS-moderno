import { getHeroeById } from '../src/bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('2 segundos despues');

//         const hero = getHeroeById(2);
//         console.log(hero);
//         resolve(hero);
//         // reject('No se pudo encontrar al heroe');
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
//     .catch(err => console.log(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('2 segundos despues');

            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar al heroe');
            }
        }, 2000)
    });


}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn)