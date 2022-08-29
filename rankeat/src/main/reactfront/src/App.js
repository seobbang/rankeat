import Home from "./pages/Home";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    const [loginState, setLoginState] = useState(true);

    return (
        <BrowserRouter>
            <div className={"App"}>
                <Routes>
                    <Route path="/" element={<Home loginState={loginState} setLoginState={setLoginState}/>}/>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Join" element={<Join />} />
                    <Route path="/Myreview" element={<Myreview />} />
                    <Route path="/Personal" element={<Personal />} />
                    <Route path='/DetailInfo' element={<DetailInfo loginState={{loginState}}/>}/>
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
