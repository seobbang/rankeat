import React from "react";
import { ReactDOM } from "react";
import {Select} from "antd";

const {Option} = Select;


const SavePage = () => {
    const onChange=() =>{

    }


    return (
        <div class="drop-down-container">
            <div class="drop-down">
               <Select defaultValue={Sinchon} style = {{width: 120}}>
                <Option value = "Sinchon" onChange = {onChange}>Sinchon</Option>
                <Option value = "Daehyeon" onChange = {onChange}>Daehyeon</Option> 
                <Option value = "Ahyeon">Ahyeon</Option>
               </Select>
            </div>
        </div>
        <div id = "product-list" className = 'inner'>
          <div id = "product-item">
          {products.map(product=>(
            <div className = "product-card" key = {product.id}>
              <div className= "product-img">
                <img src={product.imgsrc} alt="..." />
              </div>
              <div className = "product-name">{product.name}
  
              </div>
            </div>
          ))}
        </div>
      </div>
        
    )
}