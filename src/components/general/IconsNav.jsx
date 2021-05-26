import React from "react";

const IconsNav = ({ text, Icon, hidden }) => {
  return (
    <div className='content'>
      <Icon /> <span className={hidden ? "hidden" : "show"}>{text}</span>
    </div>
  );
};

export default IconsNav;
