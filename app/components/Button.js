import { useState } from "react";
import "./Button.css";
const Button = ({ props, content }) => {
  const [visible, setVisible] = useState(false);
  const btnClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="btn-container">
        <button onClick={btnClick}>{props}</button>
        <div className="content-container">{visible ? content : ""}</div>
      </div>
    </>
  );
};

export default Button;
