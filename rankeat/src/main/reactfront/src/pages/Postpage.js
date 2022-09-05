import React from "react";
import Product from "./Product";
import "../css/Postpage.css";
import AppLayout from "./AppLayout";

const Postpage =() =>{

  return (
    <div className = "postpage">
        <AppLayout />
        <div className = "postpage_container">
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product key={data.myList.listnum} storename={storename}/>
                <Product key={id} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>
            </div>
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product id={} storename={storename} image={image}/>
                <Product id={} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>

            </div>
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product id={} storename={storename} image={image}/>
                <Product id={} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>
            </div>
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product id={} storename={storename} image={image}/>
                <Product id={} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>
            </div>
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product id={} storename={storename} image={image}/>
                <Product id={} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>
            </div>
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product id={} storename={storename} image={image}/>
                <Product id={} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>
            </div>
            <div className = "postpagebtn"><button>#감성카페</button></div>
            <div className = "postpage_container_row">
                <Product id={} storename={storename} image={image}/>
                <Product id={} storename={storename} image={image}/>
                <Product id = id={} storename={storename} image={image}/>
            </div>

        </div>
    </div>
  )


}

export default Postpage;