const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
for (const aprovate of alumns) {
    let numbertrimestre=0;
    if( aprovate.T1 === true ){
        numbertrimestre ++
    }
    if(aprovate.T2 === true){
        numbertrimestre ++
    }
    if(aprovate.T3 === true){
        numbertrimestre ++
    }
    if(numbertrimestre <= 2){
        aprovate.isAproved = true 
    }else {
        aprovate.isAproved = false
    }
}
console.log(alumns);