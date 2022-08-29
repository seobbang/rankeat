import React from "react";
import Product from "./Product";
import DropDown from "./DropDown";
import "../css/Savepage.css";

const Savepage=()=>{

  return(
    
    
    <>
    <DropDown />
    <div className="savepage_row"><Product /><Product /></div><div className="savepage_row"><Product /><Product /></div><div className="savepage_row"><Product /></div></>
  )
}
export default Savepage;