const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let aventure=[]
let comedi= []
let action=[]
let trailer=[]
let animation=[]
for (const filter of movies) {
filter.categories.includes('comedia') ? comedi.push(filter.title,filter.duration,filter.categories.includes('comedia')) : comedi
filter.categories.includes('aventura') ? aventure.push(filter.title,filter.duration,filter.categories.includes('aventura')) : aventure
filter.categories.includes('acción') ? action.push(filter.title,filter.duration,filter.categories.includes('acción')) : action
filter.categories.includes('thriller') ? trailer.push(filter.title,filter.duration,filter.categories.includes('thriller')) : trailer
filter.categories.includes('animación') ? animation.push(filter.title,filter.duration,filter.categories.includes('animación')) : animation

}
console.log('peliculas de comedia ',comedi);
console.log('peliculas de aventura ',aventure);
console.log('peliculas de acción ',action);
console.log('trailers ',trailer);
console.log('peliculas de animacion ',animation);


