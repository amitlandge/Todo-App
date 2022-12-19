let input = document.querySelector(".input");
let addBtn = document.querySelector(".addButton");
let container = document.querySelector(".container");

addBtn.addEventListener("click", () => {
  let task = input.value;
  if (!task) {
    return;
  } else if (task.trim().length < 1) {
    return;
  }
  // create div element
  let createEle = document.createElement("div");
  createEle.classList.add("item");
  // create input element
  let createInput = document.createElement("input");
  createInput.classList.add("item_input");
  (createInput.type = "text"), createInput.setAttribute("readonly", "readonly");
  createInput.value = task;
  createEle.appendChild(createInput);
  container.appendChild(createEle);
  // create edit button
  let createEdit_button = document.createElement("button");
  createEdit_button.innerHTML = "EDIT";
  createEdit_button.classList.add("editButton");
  // create delete Button
  let createDelete_Button = document.createElement("button");
  createDelete_Button.innerHTML = "DELETE";
  createDelete_Button.classList.add("deleteButton");
  createEle.appendChild(createEdit_button);
  createEle.appendChild(createDelete_Button);
  createEdit_button.addEventListener("click", () => {
    console.log("edit");
    if (createEdit_button.innerText.toLowerCase() == "edit") {
      createEdit_button.innerText = "Save";
      createInput.removeAttribute("readonly");
      createInput.focus();
    } else {
      createEdit_button.innerText = "EDIT";
      createEdit_button.setAttribute("readonly", "readonly");
    }
  });
  createDelete_Button.addEventListener("click", () => {
    createDelete_Button.parentElement.remove();
  });
});
