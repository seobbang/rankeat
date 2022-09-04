import { Dropdown } from "bootstrap";
import React from "react";
import { useState } from "react";
import Dropdownparent from "./Dropdownparent";

const DropDown =(props)=>{

  const [dropdownVisibility, setDropdownVisibility] =useState(false);

  return (
    <div id = "dropdown">
      <button onClick={e => setDropwdownVisibility(!dropdownVisibility)}>
        {
          dropdownVisibility 
                 ?  'Close'
                 : 'Open'

        }
      </button>
      <Dropdownparent visibility = {dropdownVisibility}>
        <ul>
          <li>연희동</li>
          <li>신촌동</li>
          <li>대현동</li>
        </ul>
      </Dropdownparent>
    </div>
  )


};



export default DropDown;