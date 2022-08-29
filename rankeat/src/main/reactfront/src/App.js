import Home from "./pages/Home";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import yeonHuiDummyData from "./data/yeonHui.json";
import ewhaDummyData from "./data/ewha.json";
import sinChonDummyData from "./data/sinChon.json";


import Login from "./pages/Login";
import Join from "./pages/Join";
import Myreview from "./pages/Myreview";
import Personal from "./pages/Personal";
import DetailInfo from "./pages/DetailInfo";
import WriteReview from "./pages/WriteReview";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Savepage from "./pages/Savepage";
import Postpage from "./pages/Postpage";

function App() {
    const yeonHuiData = yeonHuiDummyData.DATA.slice(0,499).filter((it) => it.dtlstatenm === "영업").slice(0,20).map((it) => {
        return{
            storenum : it.mgtno, //관리번호
            tel : it.sitetel, //전화번호
            address: it.sitewhladdr, //지번주소
            storename: it.bplcnm, //사업장명
            storetype: it.uptaenm, //업태구분명
        }
    });
    console.log(yeonHuiData);
    const sinChonData = sinChonDummyData.DATA.slice(0,499).filter((it) => it.dtlstatenm === "영업").slice(0,20).map((it) => {
        return{
            storenum : it.mgtno, //관리번호
            tel : it.sitetel, //전화번호
            address: it.sitewhladdr, //지번주소
            storename: it.bplcnm, //사업장명
            storetype: it.uptaenm, //업태구분명
        }
    });
    console.log(sinChonData);
    const ewhaData = ewhaDummyData.DATA.slice(0,499).filter((it) => it.dtlstatenm === "영업").slice(0,20).map((it) => {
        return{
            storenum : it.mgtno, //관리번호
            tel : it.sitetel, //전화번호
            address: it.sitewhladdr, //지번주소
            storename: it.bplcnm, //사업장명
            storetype: it.uptaenm, //업태구분명
        }
    });
    console.log(ewhaData);
    return (
        <BrowserRouter>
            <div className={"App"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Join" element={<Join />} />
                    <Route path="/Myreview" element={<Myreview />} />
                    <Route path="/Personal" element={<Personal />} />
                    <Route path='/DetailInfo' element={<DetailInfo/>}/>
                    <Route  path='/WriteReview' element={<WriteReview />}/>
                    <Route path="/Main" element = {<Main/>}/>
                    <Route path = "/Product" element= {<Product/>} />
                    <Route path = "/Savepage" element={<Savepage />}/>
                    <Route path = "/Postpage" element={<Postpage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
