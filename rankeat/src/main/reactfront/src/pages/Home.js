/* 메인 페이지 */
import '../css/Home.css';
import {useState} from "react";

const Home = () => {
    const [searchWhat, setSearchWhat] = useState("store"); //음식점 검색 or 맛집 리스트 검색

    return (
        <div className="Home">
            {/* 상단바 */}
            <div className="header">
                <button id="openMenu">메뉴</button>
                <header>
                    <h1>RankEat</h1>
                </header>
            </div>

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
                <input id="searchBar" type="text"></input>
            </div>

            {/* 음식점 랭킹 */}
            <div className="rank">
                <div className="totalRank">
                    <h2>
                        {">"}
                        {">"} 이번주 총 랭킹
                    </h2>
                </div>

                <div className="ewhaRank">
                    <h2>
                        {">"}
                        {">"} 이번주 이대 랭킹
                    </h2>
                </div>
                <div className="sinChonRank">
                    <h2>
                        {">"}
                        {">"} 이번주 신촌 랭킹
                    </h2>
                </div>
                <div className="yeonNamRank">
                    <h2>
                        {">"}
                        {">"}이번주 연남 랭킹
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
