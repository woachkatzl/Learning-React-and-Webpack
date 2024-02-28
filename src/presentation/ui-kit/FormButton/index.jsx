import React, { forwardRef } from "react";

const FormButton = forwardRef((props, ref) => {
  const { newItem, setNewItem, handleClick } = props;

  return (
    <form>
      <input
        type="text"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        ref={ref}
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
});

export { FormButton };
