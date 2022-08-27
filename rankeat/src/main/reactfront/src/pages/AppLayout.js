import '../css/AppLayout.css';
import React, {useState} from "react";
import { MdSettings } from "react-icons/md"
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch} from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"

const AppLayout = ({loginState}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            {/* 상단바 */}
            <div className="header">
                <button className="openMenu" onClick={() => toggleMenu()}><AiOutlineMenu id={"openMenu"}/></button>
                <header>
                    <h1 onClick={()=>{window.location.href="/"}}>RankEat</h1>
                </header>
            </div>

            <div className={isMenuOpen ? "" : "hidden"}>
                {/* 사이드바 - 비로그인 */}
                <div className={"sidebar " + (loginState ? 'hidden' : '')}>
                    <button className="exit" onClick={() => toggleMenu()}><GrFormClose id={"exit"}/></button>
                    <div className="menuBeforeLogin">
                        <div><button id="login" onClick={()=>{window.location.href="/Login"}}>로그인</button></div>
                        <div><button id="signUp" onClick={()=>{window.location.href="/Join"}}>회원가입</button></div>
                    </div>
                </div>

                {/* 사이드바 - 로그인 후 */}
                <div className={"sidebarAfterLogin " + (loginState ? '' : 'hidden')}>
                    <button className="exit" onClick={() => toggleMenu()}><GrFormClose id={"exit"}/></button>
                    <div className="profile">
                        <div>이미지</div>
                        <h4>OOO 님</h4>
                    </div>
                    <div className="listMenu">
                        <h3>맛집 리스트</h3>
                        <div><button id="myList" onClick={()=>{window.location.href="/PostPage"}}>내가 만든 맛집리스트</button></div>
                        <div><button id="saveList" onClick={()=>{window.location.href="/SavePage"}}>내가 저장한 맛집 리스트</button></div>
                    </div>
                    <div className="reviewMenu">
                        <h3>후기</h3>
                        <div><button id="myReview" onClick={()=>{window.location.href="/Join"}}>내가 쓴 후기</button></div>
                    </div>
                    <div className="editOrLogout">
                        <MdSettings id={"editMyInfoIcon"}/>
                        <button id="editMyInfo" onClick={()=>{window.location.href="/Personal"}}> 개인정보 수정</button>
                        <button id="logOut" onClick={()=>{
                            if (window.confirm("로그아웃 하시겠습니까?")) {
                                sessionStorage.setItem('user_id', null);
                            }
                        }}> 로그아웃</button>
                    </div>`

                </div>

            </div>


        </div>
    )
}

export default AppLayout;