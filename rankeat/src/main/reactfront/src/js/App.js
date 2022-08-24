import React from "react";
import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<MainPage/>}/>
        <Route path = "/products" element= {<ProductPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
