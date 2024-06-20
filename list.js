
const third = document.getElementById("third");

function add(){
  const text = document.getElementById("text").value;
  let listItem = document.createElement("li");
  task(text);
}

function task(text){
  const todo = document.createElement("h2");
  let checkBox = document.createElement("input");


  todo.innerText=text;


  checkBox.type= "checkbox";

  third.appendChild(checkBox);
  third.appendChild(todo);


}
