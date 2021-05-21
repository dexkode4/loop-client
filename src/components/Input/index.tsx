import { ViewOpenIcon, ViewOffIcon } from "assets/svg";
import React from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  isPasswordInput?: boolean;
  type?: string
}

const Input = ({ isPasswordInput, type = "text" }: InputProps) => {
  const [hidden, setHidden] = React.useState(true);
  const handleClick = () => setHidden(!hidden);

  return (
    <div className={styles.inputContainer}>
      <input type={ isPasswordInput && hidden ? "password" : type} placeholder={`${isPasswordInput ? 'Enter Password' : ''}`}/>

      {isPasswordInput && (
        <div className={styles.inputContainerIcon} onClick={handleClick}>
          {hidden ? <ViewOpenIcon /> :  <ViewOffIcon />}
        </div>
      )}
    </div>
  );
};

export default Input;
