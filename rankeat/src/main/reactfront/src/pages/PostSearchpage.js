import React from 'react';
import qs from 'qs';
import AppLayout from "./AppLayout";
import SearchBar from "./SearchBar";
import QueryString from 'qs';
import CancelProduct from "./CancelProduct";
import {axios} from "axios";
import "../css/PostSearchpage.css";

function PostSearchpage() {



    const query=qs.parse(window.location.search, {ignoreQueryPrefix : true,}); 
     /*const request= axios.get("/search/list", {params:{"search" : query.word}, withCredentials:true}).then((response) => response.data).catch(()=>{console.log(e);})
    requst.storesearchlist


    /*searchlist는 request.sotresearchlist로 만들어서 검색결과를 객체로 저장해야됨 */

    return(
        <div className={"postsearchpage_container"}>
            <AppLayout />
            <SearchBar />
            <div className={"postsearchpage_content"}>
                {this.state.searchResult>0 ? (
                    <div className={"postsearchpage_row"}>
                        {this.state.searchResult.map((item)=>{return(
                            <CancelProduct key={id} storename={storename}/>
                            );
                        })}
                    </div>
                ) : (<div className={"empty-box"}>검색 결과가 뜨지 않습니다.</div>)}
            </div>
        </div>
    )
}

export default PostSearchpage;