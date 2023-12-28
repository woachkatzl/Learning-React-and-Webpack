import React from "react";

function FormButton(props) {
  const { newItem, setNewItem, handleClick } = props;

  return (
    <form>
      <input
        type="text"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
}

export { FormButton };
