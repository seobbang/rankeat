import React from "react";
import Product from "./Product";
import AppLayout from "./AppLayout";
import QueryString from "qs";
import "../css/Main.css";
import SearchBar from "./SearchBar";


const Main=({item})=>{

    const request= axios.get("/search/list", {"search" : query.word}, withCredentials:true};).then((response) => reponse.data)
    const query=qs.parse(window.location.search, {ignoreQueryPrefix : true,});
    

  return (

    <div className = "main-container">

      <AppLayout/>
        <SearchBar />
        <div className={"hashtag-container"}>
            <div className ="hashtag_row">
                <button className={"retro"}>#레트로</button>
                <button className={"retro"}>#레트로</button>
                <button className={"retro"}>#레트로</button>
                <button className={"retro"}>#레트로</button>
            </div>
            <div className ="hashtag_row">
                <button className={"retro"}>#레트로</button>
                <button className={"retro"}>#레트로</button>
                <button className={"retro"}>#레트로</button>
                <button className={"retro"}>#레트로</button>
            </div>

        </div>
        <div className = "main_row">
            <div className = "search_content">
                {this.state.searchResult.length>0? (
                    <div className = "search_content_row">
                        {this.state.searchResult.map((item) =>{
                            return(
                                <Product key={data.storeSearchList.storenum} storename={data.storeSearchList.storename} />)

                            ;
                        })}
                    </div>
                ) : (<div className ="empty-box">검색결과가 뜨지 않습니다.</div>)}
            </div>
        </div>
      
    </div>
  )

}

export default Main;