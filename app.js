// DOMContentLoaded event listener to start the app when the page is loaded add a new to-do item to the list when the add button is clicked and the input field is not empty. The new to-do item should be added to the list as a new list item with a checkbox input and a label containing the text of the input field. The input field should be cleared after the new to-do item is added to the list.
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the new to-do input field, the add button, and the to-do list.
    const newToDo = document.getElementById("new-todo");
    const addButton = document.getElementById("add-button");
    const toDoList = document.getElementById("todo-list");

    // Add an event listener to the add button that listens for the click event. When the add button is clicked, get the text of the input field and remove any leading or trailing whitespace.
    addButton.addEventListener("click", function () {
        const taskText = newToDo.value.trim();
        // If the input field is not empty, create a new list item element and set its innerHTML to the text of the input field. Add the new list item to the to-do list.
        if (taskText !== "") {
            const listItem = document.createElement("li");
            //  Add a delete button to the list item that allows the user to delete the to-do item from the list.
            listItem.innerHTML = `${taskText} <button class="delete-button">Delete</button>`;
            toDoList.appendChild(listItem);
            newToDo.value = "";
            // Add an event listener to the delete button that listens for the click event. When the delete button is clicked, remove the list item from the to-do list.
            const deleteButton = listItem.querySelector(".delete-button");

            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
});
