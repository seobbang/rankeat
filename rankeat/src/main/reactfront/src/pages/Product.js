import React from "react";
import "../css/Product.css";

const Product =()=>{

  return (
    <div className = "product-container">
      <div className = "product">
        <div className = "product_img"><img src="..." alt="..." /></div>
        <div cassName = "product_name">Productname</div>
        <div id = "followbtn"><button>장바구니 담기</button></div>
      </div>
      <div className = "product">
        <div className = "product_img"><img src="..." alt="..." /></div>
        <div cassName = "product_name">Productname</div>
        <div id = "followbtn"><button>장바구니 담기</button></div>
      </div>
      <div className = "product">
        <div className = "product_img"><img src="..." alt="..." /></div>
        <div cassName = "product_name">Productname</div>
        <div id = "followbtn"><button>장바구니 담기</button></div>
      </div>
      
    </div>
  )

}

export default Product;