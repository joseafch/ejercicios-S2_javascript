const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];


let eliminate=[]
for (const postal of placesToTravel) {
 
// postal.id != 11 && postal.id != 40 ? placesToTravel.splice(postal,1) : placesToTravel

postal.id != 11 && postal.id != 40 ? eliminate.push(postal) : placesToTravel

}
// console.log(placesToTravel);
console.log(eliminate)
