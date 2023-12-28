import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, setChecked] = useState(false);

  const handleCheckedState = () => {
    setChecked(!checked);
  };

  return (
    <div {...props}>
      <input type="checkbox" checked={checked} onChange={handleCheckedState} />
      <label
        style={
          checked
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
      >
        {props.name}
      </label>
      <button
        onClick={() => {
          props.onClickFunc(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export { ToDoItem };
