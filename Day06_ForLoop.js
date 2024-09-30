for (let i = 0; i <= 5; i++) {
    console.log(i);
  console.log(`${i}`)
}

const todos = [
  {
    id:1,
    task:'eat',
    isComplete:true
  },
  {
    id:2,
    task:'shopping',
    isComplete:true
  },
  {
    id:3,
    task:'take out dog',
    isComplete:false
  }
];

console.log(todos);
console.log(todos[0]); //printing firs item
console.log(todos[0].task); //"eat"

//print all of the only tasks
for (i=0; i<todos.length;i++) {
  console.log(todos[i].task)
}
/*
"eat"
"eat"
"shopping"
"take out dog"
*/

//1. Using Map
//storing tasks using a map function
const map1 = todos.map(
  function tasks(eachTask) {
    return eachTask.task
  });
console.log(map1); //["eat", "shopping", "take out dog"]

//2. Using map and arrow function
const map2 = todos.map (
eachItem => eachItem.task
);
console.log(map2);//["eat", "shopping", "take out dog"]

//3. For Each
const taskArray =[]
todos.forEach (
eachItem => taskArray.push(eachItem.task)
)
console.log(taskArray); //["eat", "shopping", "take out dog"]

