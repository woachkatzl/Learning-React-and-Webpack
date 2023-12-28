import React, { useState, useEffect } from "react";

//info
import { tasks } from "../../domain/info/tasksInfo";

//components
import { ToDoItem } from "../components/ToDoItem";
import { FormButton } from "../ui-kit/FormButton";

//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";

function ToDos() {
  //states
  const [items, setItems] = useLocalStorage("toDoList", []);

  const [newItem, setNewItem] = useState(""); //state for the form button (adding items), pass to a child

  // useEffect(() => {
  //   setItems(tasks);
  // }, []);

  //When the information is acutally retrieved from storage. But not necessary when using the custom hook useLocalStorage.
  //useEffect(() => {
  //Can be used once when first launching the server to create local storage and then commented out
  //localStorage.setItem("toDoList", tasks);

  //setItems(JSON.parse(localStorage.getItem("toDoList")));
  //}, []);

  const deleteItem = (id) => {
    const updatedTasks = items.filter((item) => item.id !== id);
    setItems(updatedTasks);

    //If using storage, also need to update it. But not necessary when using the custom hook useLocalStorage.
    //localStorage.setItem("toDoList", JSON.stringify(updatedTasks));
  };

  const addItem = (e) => {
    e.preventDefault();

    const id = items.length ? parseInt(items[items.length - 1].id) + 1 : 1; //making a new id by incrementing id of the las item in the list
    const itemToAdd = { id, checked: false, name: newItem }; //creating an object with info to add to the list
    const updatedItems = [...items, itemToAdd]; //adding it to the list
    setItems(updatedItems); //setting the update list to display and save into storage
    setNewItem(""); //clearing the input field
  };

  return (
    <main>
      <h2>To do:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ToDoItem
              id={item.id}
              name={item.name}
              onClickFunc={() => {
                deleteItem(item.id);
              }}
            />
          </li>
        ))}
      </ul>
      <FormButton
        newItem={newItem}
        setNewItem={setNewItem}
        handleClick={addItem}
      />
    </main>
  );
}

export { ToDos };
