import React, { useState, useEffect } from "react";

//info
import { tasks } from "../../domain/info/tasksInfo";

//components
import { ToDoItem } from "../components/ToDoItem";

function ToDos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(tasks);
  }, []);

  //When the information is acutally retrieved from storage:
  //   useEffect(() => {
  //     setItems(JSON.parse(localStorage.getItem("toDoList")));
  //   }, []);

  const deleteItem = (id) => {
    const updatedTasks = items.filter((item) => item.id !== id);
    setItems(updatedTasks);

    //If using storage, also need to update it
    //localStorage.setItem("toDoList", JSON.stringify(updatedTasks));
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
    </main>
  );
}

export { ToDos };
