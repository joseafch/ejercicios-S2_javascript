let myarray = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, par1, par2) => {
 let gpar1= array[par1] ;
 array[par1] = array[par2];
 array[par2] = gpar1;

};
swap(myarray,0,2)
console.log(myarray);