const taskInput = document.querySelector(".task");
const submitButton = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const bodyContainer = document.querySelector(".bodycontainer");

function createTaskElement(taskText) {
  const body = document.createElement("div");
  body.classList.add("task-body");

  const taskItem = document.createElement("li");
  taskItem.innerText = taskText;
  body.appendChild(taskItem);

  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  body.appendChild(doneButton);

  const clearButton = document.createElement("button");
  clearButton.innerText = "Clear";
  body.appendChild(clearButton);

  doneButton.addEventListener("click", function () {
    doneButton.parentElement.style.textDecoration = "line-through";
  });

  clearButton.addEventListener("click", function () {
    this.parentElement.remove();
  });

  clear.addEventListener("click", function () {
    body.remove();
  });
  return body;
}

function onSubmitClick() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please Enter a Task");
    return;
  }
  const body = createTaskElement(taskText);
  bodyContainer.appendChild(body);
  taskInput.value = "";

  const doneButtons = document.querySelectorAll(".done-button");
  const clearButtons = document.querySelectorAll(".clear-button");
}

submitButton.addEventListener("click", onSubmitClick);
