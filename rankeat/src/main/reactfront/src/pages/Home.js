/* 메인 페이지 */
import '../css/Home.css';
import React, {useState, useEffect} from "react";
import AppLayout from "./AppLayout";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri"
import { IoMoon } from "react-icons/io5"
import SearchBar from "./SearchBar";
import axios from "axios";

const Home = ({loginState, setLoginState}) => {
    let totalRank = null;
    let ewhaRank = null;
    let sinChonRank = null;
    let yeonHuiRank = null;


    // axios.get("/main")
    //     .then(function (response) {
    //         totalRank = response.rankall;
    //         ewhaRank = response.rank1;
    //         sinChonRank = response.rank2;
    //         yeonHuiRank = response.rank3;
    //     }).catch(function(error) {
    //     console.log("랭킹 가져오기 오류")
    // });



    return (
        <div className="Home">
            <AppLayout loginState={loginState} setLoginState={setLoginState}/>
            <SearchBar/>
            {/* 음식점 랭킹 */}
            <div className="rank">
                <h2>
                    이번주 총 랭킹
                </h2>
                <div className="totalRank">
                    <div>
                        <div className={"first"} id={"total1st"} onClick={() => window.location.href="/DetailInfo/?storeNum=어쩌구"}>
                            <RiNumber1 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"second"} id={"total2nd"}>
                            <RiNumber2 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"third"} id={"total3rd"}>
                            <RiNumber3 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                    </div>
                </div>

                <h2>
                    이번주 이대 랭킹
                </h2>
                <div className="ewhaRank">
                    <div>
                        <div className={"first"} id={"total1st"}>
                            <RiNumber1 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"second"} id={"total2nd"}>
                            <RiNumber2 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"third"} id={"total3rd"}>
                            <RiNumber3 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                    </div>
                </div>

                <h2>
                    이번주 신촌 랭킹
                </h2>
                <div className="sinChonRank">
                    <div>
                        <div className={"first"} id={"total1st"}>
                            <RiNumber1 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"second"} id={"total2nd"}>
                            <RiNumber2 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"third"} id={"total3rd"}>
                            <RiNumber3 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>

                        </div>
                    </div>
                </div>

                <h2>
                    이번주 연희 랭킹
                </h2>
                <div className="yeonHuiRank">
                    <div>
                        <div className={"first"} id={"total1st"}>
                            <RiNumber1 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"second"} id={"total2nd"}>
                            <RiNumber2 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                        <div className={"third"} id={"total3rd"}>
                            <RiNumber3 className={"numberIcon"}/>
                            <h3 className={"storeName"}> 음식점 1 </h3>
                            <div className={"storeType"}> 한식 </div>
                            <div className={"dalPoint"}><IoMoon/> 3.5 </div>
                            <div className={"img"}> <img/> </div>
                        </div>
                    </div>
                </div>
            {/*<div className="rank">*/}
            {/*    <h2>*/}
            {/*        이번주 총 랭킹*/}
            {/*    </h2>*/}
            {/*    <div className="totalRank">*/}
            {/*        <div>*/}
            {/*            <div className={"first"} id={"total1st"} onClick={() => window.location.href="/DetailInfo/?storeNum=${totalRank[0].storenum}"}>*/}
            {/*                <RiNumber1 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {totalRank[0].storename} </h3>*/}
            {/*                <div className={"storeType"}> {totalRank[0].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {totalRank[0].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"second"} id={"total2nd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${totalRank[1].storenum}"}>*/}
            {/*                <RiNumber2 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {totalRank[1].storename} </h3>*/}
            {/*                <div className={"storeType"}> {totalRank[1].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {totalRank[1].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"third"} id={"total3rd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${totalRank[2].storenum}"}>*/}
            {/*                <RiNumber3 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {totalRank[2].storename} </h3>*/}
            {/*                <div className={"storeType"}> {totalRank[2].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {totalRank[2].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <h2>*/}
            {/*        이번주 이대 랭킹*/}
            {/*    </h2>*/}
            {/*    <div className="ewhaRank">*/}
            {/*        <div>*/}
            {/*            <div className={"first"} id={"total1st"} onClick={() => window.location.href="/DetailInfo/?storeNum=${ewhaRank[0].storenum}"}>*/}
            {/*                <RiNumber1 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {ewhaRank[0].storename} </h3>*/}
            {/*                <div className={"storeType"}> {ewhaRank[0].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {ewhaRank[0].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"second"} id={"total2nd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${ewhaRank[1].storenum}>*/}
            {/*                <RiNumber2 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {ewhaRank[1].storename} </h3>*/}
            {/*                <div className={"storeType"}> {ewhaRank[1].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {ewhaRank[1].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"third"} id={"total3rd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${ewhaRank[2].storenum}>*/}
            {/*                <RiNumber3 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {ewhaRank[2].storename} </h3>*/}
            {/*                <div className={"storeType"}> {ewhaRank[2].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {ewhaRank[2].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <h2>*/}
            {/*        이번주 신촌 랭킹*/}
            {/*    </h2>*/}
            {/*    <div className="sinChonRank">*/}
            {/*        <div>*/}
            {/*            <div className={"first"} id={"total1st"} onClick={() => window.location.href="/DetailInfo/?storeNum=${sinChonRank[0].storenum}>*/}
            {/*                <RiNumber1 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {sinChonRank[0].storename} </h3>*/}
            {/*                <div className={"storeType"}> {sinChonRank[0].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {sinChonRank[0].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"second"} id={"total2nd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${sinChonRank[1].storenum}>*/}
            {/*                <RiNumber2 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {sinChonRank[1].storename} </h3>*/}
            {/*                <div className={"storeType"}> {sinChonRank[1].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {sinChonRank[1].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"third"} id={"total3rd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${sinChonRank[2].storenum}>*/}
            {/*                <RiNumber3 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {sinChonRank[2].storename} </h3>*/}
            {/*                <div className={"storeType"}> {sinChonRank[2].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {sinChonRank[2].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <h2>*/}
            {/*        이번주 연희 랭킹*/}
            {/*    </h2>*/}
            {/*    <div className="yeonHuiRank">*/}
            {/*        <div>*/}
            {/*            <div className={"first"} id={"total1st"} onClick={() => window.location.href="/DetailInfo/?storeNum=${yeonHuiRank[0].storenum}>*/}
            {/*                <RiNumber1 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {yeonHuiRank[0].storename} </h3>*/}
            {/*                <div className={"storeType"}> {yeonHuiRank[0].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {yeonHuiRank[0].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"second"} id={"total2nd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${yeonHuiRank[1].storenum}>*/}
            {/*                <RiNumber2 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {yeonHuiRank[1].storename} </h3>*/}
            {/*                <div className={"storeType"}> {yeonHuiRank[1].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {yeonHuiRank[1].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*            <div className={"third"} id={"total3rd"} onClick={() => window.location.href="/DetailInfo/?storeNum=${yeonHuiRank[2].storenum}>*/}
            {/*                <RiNumber3 className={"numberIcon"}/>*/}
            {/*                <h3 className={"storeName"}> {yeonHuiRank[2].storename} </h3>*/}
            {/*                <div className={"storeType"}> {yeonHuiRank[2].storetype} </div>*/}
            {/*                <div className={"dalPoint"}><IoMoon/> {yeonHuiRank[2].dalpoint} </div>*/}
            {/*                <div className={"img"}> <img/> </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
        </div>
    );
};

export default Home;
