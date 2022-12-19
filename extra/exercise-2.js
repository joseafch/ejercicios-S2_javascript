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
let volumentotal=[]
let volumenes=0;


for (const music of users) {
    // console.log(music);
    for (const sound in music.favoritesSounds) {
    //    console.log(music.favoritesSounds[sound].volume);
       volumentotal.push(music.favoritesSounds[sound].volume)
   volumenes += music.favoritesSounds[sound].volume
    }
    }
    
            console.log(volumentotal);
            console.log(volumenes);
            console.log(volumenes / volumentotal.length);
            
