import React from "react";

const TextBox = ({ name, type = "text" }) => {
  return (
    <div className="inputContainer">
      <input type={type} placeholder={name} />
    </div>
  );
};

export default TextBox;
