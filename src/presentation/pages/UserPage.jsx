import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Modal } from "antd";

import { SelectionBar } from "../components/selectionBar";

import userImage from "../../assets/cat-avatar-2.png";
import userImage2 from "../../assets/cat-avatar-3.png";
import userImage3 from "../../assets/cat-avatar-4.png";
import userImage4 from "../../assets/cat-avatar-5.png";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

import "./UserPage.scss";

function UserPage(props) {
  const { users } = props;

  const userAvatars = [userImage, userImage2, userImage3, userImage4];

  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [userAvatar, setUserAvatar] = useState(userAvatars[0]);

  const user = users.find((user) => user.id == id);

  useEffect(() => {
    const currentIndex = JSON.parse(localStorage.getItem("userAvatar"));
    //Checking if the saved data exists and if there is a userAvatars array element inder this index
    if (currentIndex && userAvatars[currentIndex])
      setUserAvatar(userAvatars[currentIndex]);
  }, []);

  const handleAvatarLeft = () => {
    setAvatarIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : 0;
    });
  };

  const handleAvatarRight = () => {
    setAvatarIndex((prevIndex) => {
      return prevIndex < userAvatars.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const handleAvatarSave = () => {
    localStorage.setItem("userAvatar", JSON.stringify(avatarIndex));
    setUserAvatar(userAvatars[avatarIndex]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <img
        src={userAvatar}
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
          <SelectionBar
            availableOptions={userAvatars}
            currentOption={avatarIndex}
          ></SelectionBar>
          <p className="avatarModuleText">Choose an avatar</p>
          <div className="avatarModuleContent">
            <button
              className="avatarModuleBtn"
              onClick={() => handleAvatarLeft()}
              disabled={avatarIndex === 0}
            >
              <img src={arrowLeft} alt="Arrow" />
            </button>
            <img
              className="avatarModuleImg"
              src={userAvatars[avatarIndex]}
              alt="avatar"
            />
            <button
              className="avatarModuleBtn"
              onClick={() => handleAvatarRight()}
              disabled={avatarIndex === userAvatars.length - 1}
            >
              <img src={arrowRight} alt="Arrow" />
            </button>
          </div>
          <button className="avatarSaveBtn" onClick={() => handleAvatarSave()}>
            Save
          </button>
        </Modal>
      )}
    </div>
  );
}

export { UserPage };
