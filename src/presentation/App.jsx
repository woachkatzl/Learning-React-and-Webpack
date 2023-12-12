import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//components
import { Button } from "./ui-kit/button";
import { Checkbox1 } from "./ui-kit/checkbox";
import { Timer } from "./timer";

//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import { NoMatch } from "./pages/MissingPage";

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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export { App };
