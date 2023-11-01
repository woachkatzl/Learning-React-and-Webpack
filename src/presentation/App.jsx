import React from "react";

import { Button } from "./ui-kit/button";
import { Checkbox1 } from "./ui-kit/checkbox";

function onButtonClick() {
  console.log("success");
}

function App() {
  return (
    <>
      <Button onClick={onButtonClick}>Кнопка React</Button>
      <Checkbox1 />
    </>
  );
}

export { App };
