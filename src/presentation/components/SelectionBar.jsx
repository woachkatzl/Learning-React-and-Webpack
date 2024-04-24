import React from "react";
import "./SelectionBar.scss";

const SelectionBar = ({ availableOptions, currentOption }) => {
  const numberOfOptions = availableOptions.length;

  return (
    <div className="selectionBarContainer">
      <div className="selectionBarsBox">
        {availableOptions.map((option, index) => {
          if (index < currentOption) {
            return <div key={index} className="selectionBar_passed"></div>;
          } else if (index === currentOption) {
            return <div key={index} className="selectionBar_active"></div>;
          } else if (index > currentOption) {
            return <div key={index} className="selectionBar_inactive"></div>;
          }
        })}
      </div>
      <div className="selectionBarCount">
        <span className="selectionBarFirstCount">{currentOption + 1}</span>
        <span className="selectionBarSecondCount">/{numberOfOptions}</span>
      </div>
    </div>
  );
};

export default SelectionBar;
