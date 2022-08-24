import './App.css';
import Home from "./pages/Home";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import yeonHuiDummyData from "./data/yeonHui.json";
import ewhaDummyData from "./data/ewha.json";
import sinChonDummyData from "./data/sinChon.json";


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
                    {/*<Route path={"/SearchListsCards"} element={<SearchListsCards/>}/>*/}
                    {/*<Route path='/DetailInfo' element={<DetailInfo/>}/>*/}
                    {/*<Route  path='/WriteReview' element={<WriteReview />}/>*/}
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
