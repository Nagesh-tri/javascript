//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// function getAverageAge(arr){
//     let sumAge=arr.reduce((acc,item)=>{
//         acc+=item.age;
//         return acc;
//     },0)
//     return sumAge/arr.length
// }
//reducing Code
function getAverageAge(arr){
    return arr.reduce((acc,i)=>acc+i.age/arr.length,0)
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
//

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28