const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let anticat= []
for (const cat of toys) {
    cat.name.includes("gato") ? anticat : anticat.push(cat)
}
console.log(anticat);
// for (const filtrado of toys) {
//     let filtro = filtrado.filter(filtrado => filtrado.name == filtrado.include('gato'))
// }
// console.log(filtro);