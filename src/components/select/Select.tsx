import React from "react";
import './Select.css';

function Select(props: any) {
  const { size = "medium", ...rest } = props;
  return (
    <select className={`select ${size}`} {...rest}>
     <option>Mumbai</option>
     <option>Jaipur</option>
     <option>Pune</option>
    </select>
  );
}

export default Select;