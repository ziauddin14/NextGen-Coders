// function clearAll(){
//     document.getElementById("numberinput").value = ""
// }
// numberinput.value =
// numberinput.value + ""
// function numberclick(num) {
//     var input=document.getElementById("numberinput")
// if (!input) return ;
//  input.value += (num)
// }
// function opretorclick(opret) {
//     var input=document.getElementById("numberinput")
// if (!input) return ;
//  input.value += (opret)
// }

var todos = [];
function addTodo(task) {
  todos.push(task);
  console.log("Task Added:", task);
}
addTodo("kuch bhi");
console.log(todos);

function removeTodo() {
  if (todos.length === 0) {
    console.log("No task to remove");
  } else {
    let removed = todos.pop();
    console.log("Removed Task:", removed);
  }
}
removeTodo();
console.log(todos);
removeTodo();
addTodo("JS");
addTodo("HTML");
addTodo("React.js");
function showTodos() {
  if (todos.length === 0) {
    console.log("Todo list is empty");
  } else {
    console.log("Todo List:");
    for (let i = 0; i < todos.length; i++) {
      console.log(i + 1 + ". " + todos[i]);
    }
  }
}
// showTodos()
console.log(todos);

function updateTodoSplice(index, newTask) {
  if (index < 0 || index >= todos.length) {
    console.log("Invalid index");
  } else {
    todos[index] = newTask;
    console.log("Todo Updated!");
  }
}
updateTodoSplice(2,'c++');
console.log(todos);

console.log(Math.round(4.5));
//Random
console.log(Math.random());
console.log(Math.random() * 5); // Random number between 0 and 10
//cieling
console.log(Math.ceil(4.2));
//floor
console.log(Math.floor(4.8));
//dice roll
console.log(Math.floor(Math.random() * 6) + 1);
 // Random number between 1 and 6
 //power
console.log(Math.floor(Math.pow(4.9, 2)));
//square root
console.log(Math.sqrt(49));
//practice problem
//1. Get a random number between 1-100
console.log(Math.floor(Math.random() * 100) + 1)
var firstName = ["John", "Jane", "Alex", "Emily"];
var lastName = ["Doe", "Smith", "Johnson", "Brown"];
var fullName = []
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < lastName.length; j++) {
    }
    fullName.push(firstName[i] + " " + lastName[i]);
}
console.log(fullName);
