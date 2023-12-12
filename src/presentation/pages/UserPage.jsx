import React from "react";
import { useParams } from "react-router-dom";

function UserPage(props) {
  const { users } = props;

  const { id } = useParams();

  const user = users.find((user) => user.id == id);

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
}

export { UserPage };
