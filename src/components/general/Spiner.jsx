import React from "react";

const Spiner = (props) => {
  return (
    <div className={props.isLoading === true ? "show" : "hidden"}>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spiner;
