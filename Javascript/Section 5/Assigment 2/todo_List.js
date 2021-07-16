const todo = ["Water plants"];

  let input = prompt("What would you like to do?").toLowerCase();

// Function Declrations
const addNewTodo = () => {

  todo.push(prompt("What would you like to add?"));
}
const removeTodo = () => {
  // Prompt user fo which todo to remove
  const toBeRemoved = prompt("What would you like to remove?");
// check to see if that todo is on the list
  const i = todo.indexOf(toBeRemoved)
// If so remove it
 if(i !== -1){
   console.log("Item removed: " + todo[i]);
   todo.splice(i, 1)
 } else {
   console.log("Thats not an item on your list");
 }
// If not show user erro

}

// Main loop
while (input != "quit") {
  if (input === "show"){
    console.log(todo);
  } else if( input === "new"){
      addNewTodo();
  } else if (input === "remove"){
    removeTodo();
  }

input = prompt("Ok, what would you like to do now?").toLowerCase();

  }
