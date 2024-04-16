import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Modal } from "antd";

import userImage from "../../assets/cat-avatar-2.png";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

import "./UserPage.scss";

function UserPage(props) {
  const { users } = props;

  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = users.find((user) => user.id == id);

  return (
    <div>
      <h2>{user.name}</h2>
      <img
        src={userImage}
        onClick={() => {
          setIsModalOpen(true);
        }}
        alt="User avatar"
      />
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          className="avatar-selection-modal"
          width="620px"
        >
          <p className="avatarModuleText">Choose an avatar</p>
          <div className="avatarModuleContent">
            <button className="avatarModuleBtn">
              <img src={arrowLeft} alt="Arrow" />
            </button>
            <img className="avatarModuleImg" src={userImage} alt="avatar" />
            <button className="avatarModuleBtn">
              <img src={arrowRight} alt="Arrow" />
            </button>
          </div>
          <button className="avatarSaveBtn">Save</button>
        </Modal>
      )}
    </div>
  );
}

export { UserPage };
