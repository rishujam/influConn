import React from "react";
import "./Button.css";

const TextView = (
    {
        text, 
        onClick, 
        width = "fit-content", 
        height = "fit-content", 
        fontSize = "16px", 
        fontWeight = "400", 
        color = "#4B5563",
        alignment = "start"
    }
) => {
  const styles = { width, height, fontSize, fontWeight, color, textAlign: alignment };
  return (
    <div onClick={onClick} style={styles}>{text}</div>
  );
};

export default TextView;