import React from "react";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <div style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Header;
