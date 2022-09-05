import React from "react";
import "../css/CancelProduct.css";


const CancelProduct =(id, image, storename)=>{

  return (
      <div className = "cancelproduct">
          <div className = "cancelproduct_info">
              <img className={"cancelproduct_img"} src={image} alt="맛집 이미지" />
              <div className = "cancelproduct_name"><h3>{data.storeSearchList.storename}</h3></div>
              <div className = "cancelbtn"><button>장바구니 취소하기</button></div>
          </div>
      </div>

  )
}

export default CancelProduct;