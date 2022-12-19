let rollDice=(min,max) =>{
    min= Math.ceil(min)
    max= Math.floor(max)
return Math.floor(Math.random() * (max-min)+ min)
}
let dado=rollDice(1,6)
console.log(dado);