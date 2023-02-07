import React from "react";

const Alert = (props: any) => {
  return (
    <div className="alerts">
      <div className="mainAlert">
        <p>{props.msg}</p>
      </div>
    </div>
  );
};

export default Alert;
