import React from "react";
import { Link } from "react-router-dom";

function Users(props) {
  const { users } = props;

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li>
            <Link to={`/users/${user.id}`}>User {user.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Users };
