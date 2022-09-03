import React from "react";
import Product from "./Product";
import DropDown from "./DropDown";
import "../css/Savepage.css";
import AppLayout from "./AppLayout";
import CancelProduct from "./CancelProduct";
import SearchBar from "./SearchBar";

const Savepage=()=> {

    return (
       
       <div className = "savepage">
           <AppLayout />
           <SearchBar />
           <DropDown />
           <div className = "savepage_container">
               <div className={"savepage_container_row"}>
                   <CancelProduct />
                   <CancelProduct />
                   <CancelProduct />
               </div>
               <div className={"savepage_container_row"}>
                   <CancelProduct />
                   <CancelProduct />
                   <CancelProduct />
               </div>
               <div className={"savepage_container_row"}>
                   <CancelProduct />
                   <CancelProduct />
                   <CancelProduct />
               </div>
               <div className={"savepage_container_row"}>
                   <CancelProduct />
                   <CancelProduct />
                   <CancelProduct />
               </div>
           </div>
       </div>
    )

}
export default Savepage;