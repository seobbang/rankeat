import {AiOutlineSearch} from "react-icons/ai";
import React, {useState} from "react";

const SearchBar = () => {
    const [searchWhat, setSearchWhat] = useState("store"); //음식점 검색 or 맛집 리스트 검색

    const handleSearchWhat = (e) => {
        if(searchWhat === "store"){
            window.location.href=`/Main?word=${searchWord.value}`;
        } else if(searchWhat === "list") {
            window.location.href=`/Postpage?word=${searchWord.value}`;
        }
    }

const searchWord = "";

return (
    <div className={"SearchBar"}>
        {/* 검색창 */}
        <div className="search">
            <div className="searchSelectBt">
                <button
                    className={
                        searchWhat === "store" ? "select" : "unselect"
                    }
                    id="storeSearch"
                    onClick={() => setSearchWhat("store")}
                >
                    음식점 검색
                </button>
                <button
                    className={
                        searchWhat === "list" ? "select" : "unselect"
                    }
                    id="listSearch"
                    onClick={() => setSearchWhat("list")}
                >
                    맛집 리스트 검색
                </button>
            </div>
            <div>
                    <span className={"searchIcon"}>
                        <AiOutlineSearch id={"searchIcon"}/>
                    </span>
                <input type="text" id="searchBar" name="searchWord" onKeyUp={(e)=>{if(e.key=="Enter")handleSearchWhat()}}></input>
            </div>


        </div>
    </div>
)

}


export default SearchBar;