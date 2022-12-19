const removeItem=(array,text) =>{
    let total=text;
let letrasNum= total.length


    return array.splice(letrasNum,1)
}
let insectos=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
let pets=['Caracol', 'perro', 'Salamandra', 'Ajolote', 'gato']
let coches=['audi', 'nizzan', 'opel', 'toyota']
let call1=removeItem(insectos,'lol')
let call2=removeItem(pets,'sal')
let call3=removeItem(coches,'via')
console.log(call1);
console.log(call2);
console.log(call3);
// console.log(insectos);