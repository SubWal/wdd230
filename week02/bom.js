const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value) {
    //create li
    const li = document.createElement("li");

    //create the delete button

    const deleteButton = document.createElement("button");

    //pupulate the li element
    li.textContent = input.value;

    //populate the delete button
    deleteButton.textContent = "❌";

    //append the button to the li element

    li.appendChild(deleteButton);

    //append the li element to the list
    list.appendChild(li);
  }

    //envent to the delete button

    deleteButton.addEventListener("click", () => {
        // list.removeChild(li);

        // clearInput()
    

    else {
        
        
        input.focus();
    }

    clearInput()
    //chosse the input value to nothing or the empty string to clean up the empty list
    
    });

    





  }
