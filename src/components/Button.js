import React from "react";
import "./Button.css";

const Button = ({ text, onClick, variant = "primary", size = "wrapContentMedium" }) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;