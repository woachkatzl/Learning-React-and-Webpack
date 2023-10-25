import React from "react";
//import './styles.scss';
import styles from "./button.module.scss";

export function Button({ onClick, children }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClick();
  };

  return (
    <button className={styles.button} onClick={onClickHandler}>
      {children}
    </button>
  );
}

/* class Button {
    constructor(onClick, text) {
        this.onClick = onClick;
        this.text = text;
    }

    onClickHandler = () => {
        this.onClick();
    };

    render() {
        const button = document.createElement('button');

        button.addEventListener('click', this.onClickHandler);
        button.innerText = this.text;
        button.className = 'button';

        return button;
    }
}

export { Button }; */
