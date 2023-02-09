import React, { useEffect, useState } from "react";

const SelectMin = (props:any) => {
  const [division, setDivision] = useState("BE");
  const label = [
    {
      label: "Backend",
      value: "BE",
    },
    {
      label: "Frontend",
      value: "FE",
    },
    {
      label: "Quality Assurance",
      value: "QA",
    },
    {
      label: "Media Analyst",
      value: "MA",
    },
  ];
  useEffect(()=>{
    props.division?setDivision(props.division):setDivision("BE")
  },[])
  return (
    <select
      name="divisionMin"
      value={division}
      onChange={(e) => setDivision(e.target.value)}
      id="divisionMin"
    >
      {label.map((detail: any, index) => {
        return (
          <option key={index} value={detail.value}>
            {detail.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectMin;
