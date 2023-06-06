// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let developers_array = [
  {
    first: "John",
    last: "Doe",
    dept: "FE",
    commits: 10
  },
  {
    first: "Jane",
    last: "Doe",
    dept: "BE",
    commits: 15
  },
  {
    first: "James",
    last: "bond",
    dept: "BE",
    commits: 8
  }
]; 

let fe=developers_array.reduce((acc,item)=>{
    acc+=item.commits
    return acc
},0)

//array of full name
// let engineer= developers_array.reduce((acc,item)=>{
//     let fullName=item.first+' '+item.last;
//     acc.push(fullName)
//     return acc
// },[])

//doing same thing with map
// let engineer= developers_array.map((item)=>
// {
//     return item.first+' '+item.last;
// })\

//doing in one line
let engineer =developers_array.map(item=>item.first+' '+item.last)
console.log(engineer);

//department wise dropdown
let dept=developers_array.reduce((acc,item)=>{
  //acc(initially): {FE:[],BE:[]}
  //item: {first: "John" last: "Doe",dept: "FE",commits: 10}
  let fullname=item.first+' '+item.last;
  if(item.dept==="BE"){
      acc['BE'].push(fullname);
  }
  else{
      acc['FE'].push(fullname);
  }
  return acc
  
},{FE:[],BE:[]})

console.log(dept)