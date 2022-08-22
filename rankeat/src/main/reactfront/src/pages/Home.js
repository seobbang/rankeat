/* 메인 페이지 */
import '../css/Home.css';
import React, {useState} from "react";
import AppLayout from "./AppLayout";
import { AiOutlineSearch } from "react-icons/ai"
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri"
import { IoMoon } from "react-icons/io5"

const Home = () => {
    const [loginState, setLoginState] = useState(true);

    return (
        <div className="Home">
            <AppLayout loginState={loginState}/>

            {/* 음식점 랭킹 */}
            <div className="rank">
                <h2>
                    이번주 총 랭킹
                </h2>
                <div className="totalRank">
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
            </div>
        </div>
    );
};

export default Home;
