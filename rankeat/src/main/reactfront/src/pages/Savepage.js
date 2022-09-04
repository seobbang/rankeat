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
                /*wiki봐도 이해가 안되는 부분 : 위키에서 savepage에서 mylist에서 list가져오는 것인데, storename을 보여주는 데이터는 아무리 찾아봐도 없음 */
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList} />
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
               </div>
               <div className={"savepage_container_row"}>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
               </div>
               <div className={"savepage_container_row"}>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
               </div>
               <div className={"savepage_container_row"}>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
                   <CancelProduct key ={data.mylist.listnum} storename = {data.listname.rankeatList}/>
               </div>
           </div>
       </div>
    )

}
export default Savepage;