import React from "react";
import { GoUpload, GoX, GoPersonAdd } from "react-icons/go";

function Header({ changeLanguage }) {
  return (
    <div className="header">
      <select className="selectBox" onChange={(e) => changeLanguage(e)}>
        <option value="java">Java</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
      </select>
      <GoUpload />
      <GoPersonAdd />
      <GoX />
    </div>
  );
}

export default Header;
