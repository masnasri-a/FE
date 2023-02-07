import React, { useState } from "react";

const Input = (props: any) => {
  const [values, setValues] = useState("");
  const handleValue = (e:any)=>{
    setValues(e.target.value);
    props.output(e.target.value);
  }
  return (
    <input
      type={props.type}
      className="inputAuth"
      value={values}
      onChange={(e) => {
        handleValue(e)
      }}
    />
  );
};

export default Input;
