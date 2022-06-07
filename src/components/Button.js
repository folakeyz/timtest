import React from "react";

const Button = ({ name, color = "white" }) => {
  return (
    <div className="inputContainer bgNone">
      <button className={color}>{name}</button>
    </div>
  );
};

export default Button;
