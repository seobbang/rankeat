/*import React, { useEffect } from "react";
import { ReactDOM } from "react-dom";
import {Route, Routes} from "react-router-dom";
import axios from 'axios';
import {Button} from 'antd';

const PostPage=(props) =>{

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((result)=>{const products=result.data.products;
    setProducts(products);}).catch((e) => {console.log(e);})
  },[])

  return (
    <div class="Button"><Button>#분위기가 좋은</Button></div>
    <div id = "product-list" className = 'inner'>
      <div id = "product-items">
        {products.map(product=> (
          <div className = "product-card" key={product.id}>
            <div className = "product-img">
              <img src= {product.imgsrc} alt="" />
          </div>
          <div className = "product-contents">
            <div className = "product-name">
              {product.name}
            </div>
          </div>

       ))}
      </div>
    
    </div>
    <div class="Button"><Button>#가성비가 좋은</Button></div>
    <div id = "product-list" className = 'inner'>
      <div id = "product-items">
        {products.map(product=> (
          <div className = "product-card" key={product.id}>
            <div className = "product-img">
              <img src= {product.imgsrc} alt="" />
          </div>
          <div className = "product-contents">
            <div className = "product-name">
              {product.name}
            </div>
          </div>

       ))}
      </div>
    
    </div>    
    <div class="Button"><Button>#로맨틱한</Button></div>
    <div class = "product-list" className = 'inner'>
      <div id= "product-items">
        {products.map(product => (
          <div className = "product-card" key= {product.id}
        ))}
      </div>
    </div>
    <div class="Button"><Button>#분위기가 좋은</Button></div>
    <div id = "product-list" className = 'inner'>
    <div id = "product-items">
      {products.map(product=> (
        <div className = "product-card" key={product.id}>
          <div className = "product-img">
            <img src= {product.imgsrc} alt="" />
        </div>
        <div className = "product-contents">
          <div className = "product-name">
            {product.name}
          </div>
        </div>

     ))}
    </div>
  
  </div>
    <div class="Button"><Button>#가성비가 좋은</Button></div>
    

    <div class="Button"><Button>#로맨틱한</Button></div>

    <div class="Button"><Button>#분위기가 좋은</Button></div>
    <div class="Button"><Button>#가성비가 좋은</Button></div>
    <div class="Button"><Button>#로맨틱한</Button></div>
  )
}

export default PostPage();
*/