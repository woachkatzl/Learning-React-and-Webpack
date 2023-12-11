import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Button } from "./ui-kit/button";
import { Checkbox1 } from "./ui-kit/checkbox";
import { Timer } from "./timer";

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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMach() {
  return <h2>404 Page not found</h2>;
}

export { App };
