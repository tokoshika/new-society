import { useState } from "react";
import "./Button.css";
const Button = ({ props, content }) => {
  const [visible, setVisible] = useState(false);
  const btnClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={btnClick}>{props}</button>
      <div className="content-container">{visible ? content : ""}</div>
    </>
  );
};

export default Button;
