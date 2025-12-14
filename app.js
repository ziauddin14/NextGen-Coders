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
