import React from "react";
import Product from "./Product";
import DropDown from "./DropDown";
import "../css/Savepage.css";
import AppLayout from "./AppLayout";

const Savepage=()=>{

  return(


      <>
        <AppLayout/>
        <DropDown />
        <div className="savepage_row"><Product /><Product /></div><div className="savepage_row"><Product /><Product /></div><div className="savepage_row"><Product /></div></>
  )
}
export default Savepage;