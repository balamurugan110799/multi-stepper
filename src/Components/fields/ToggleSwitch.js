
// Filename: ToggleSwitch.js
import React from "react";
import "./ToggleSwitch.css";
  
const ToggleSwitch = ({ label,hadleChange, toogle }) => {
    // console.log(hadleChange)
  return (
    <div className="">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" onChange={hadleChange}  className="checkbox" 
               name={toogle} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;