const arr = [
  { name: "Ben", age: 14, id: 1 },
  { name: "Ben", age: 14, id: 2 },
  { name: "Ben", age: 14, id: 3 },
  { name: "Ben", age: 14, id: 4 },
];

const newItem = arr.map(i =>{
    if(i.id === 2){
        return {...i, age:3}
    }else{
        return i
    }
})
console.log(newItem);