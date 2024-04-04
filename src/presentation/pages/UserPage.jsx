import React from "react";
import { useParams } from "react-router-dom";

import userImage from "../../assets/cat-avatar-2.png";

function UserPage(props) {
  const { users } = props;

  const { id } = useParams();

  const user = users.find((user) => user.id == id);

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={userImage} alt="User avatar" />
    </div>
  );
}

export { UserPage };
