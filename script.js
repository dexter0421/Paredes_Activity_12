//Declare Variables
let todoInput = document.querySelector("#todoInput");
let taskList = document.querySelector("#taskList");
const btnAddTask = document.querySelector("#addTask");

//Task event listener
btnAddTask.addEventListener("click", function() {

  //Check input if null or not 
  if(todoInput.value === '') {

    alert("Input Task Before Click Enter.");
    
  } else {
    
    //Element for Li and Button Tag
    let li = document.createElement("li");
    let button = document.createElement("button");

    //Insert the Input value in li Tags
    let inputValue = document.createTextNode(todoInput.value);
    let buttonText = document.createTextNode('X');

    //Append LI and button tagstags    
    li.appendChild(inputValue);
    button.appendChild(buttonText);

    //Create LI tag with button
    taskList.appendChild(li).appendChild(button);

    //Marking task as done
    li.addEventListener("click", function(event) {
      const target = event.target;
      target.classList.toggle("done");
    });

    //Task Deleting
    button.addEventListener("click", function(event) {
      const target = event.currentTarget;
      target.closest("li").remove();
    });

    //Initialize input
    todoInput.value = '';

  } // end if else

}); 