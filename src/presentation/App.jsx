import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import { Button } from "./ui-kit/button";
import { Checkbox1 } from "./ui-kit/checkbox";
import { Timer } from "./timer";
import { NavBar } from "./components/NavBar";

//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import { UserPage } from "./pages/UserPage";
import { NoMatch } from "./pages/MissingPage";

//information
import { users } from "../domain/info/UsersInfo";

function onButtonClick() {
  console.log("success");
}

function App() {
  return (
    <Router>
      <div>
        <Button onClick={onButtonClick}>Кнопка React</Button>
        <Checkbox1 />
        <Timer />
        <div style={{ border: "1px solid red" }}>
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users users={users} />} />
            <Route path="/users/:id" element={<UserPage users={users} />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export { App };
