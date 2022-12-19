const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let waves=0;
let rain=0;
let firecamp=0;
let shower=0;
let train=0;

for (const favorites of users) {
    for (const sound in favorites.favoritesSounds) {
        sound.includes('waves') ? waves++ : waves
        sound.includes('rain') ? rain++ : rain
        sound.includes('firecamp') ? firecamp ++ : firecamp
        sound.includes('shower') ? shower ++ : shower
        sound.includes('train') ? train++ : train
        // console.log(sound);
    }
}
console.log('cantidad de veces añadido a favorito por los usuarios');
console.log('sonido de las olas : ',waves);
console.log('sonido de lluvia: ',rain);
console.log('sonido fogata: ',firecamp);
console.log('sonido la ducha: ',shower);
console.log('sonido tren: ',train);