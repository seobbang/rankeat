import React from 'react';
import "../css/Product.css";

function Product(id, storename, image) {
    return (
        <div className="product">
            <div className={"product_info"}>
                <img className={"product_img"} src={image} alt="맛집 이미지" />
                {/*<div className = "product_name"><h3>{data.storeSearchList.storename}</h3></div>*/}
                <div className = "productbtn"><button>장바구니 취소하기</button></div>

            </div>
        </div>
    );
}

export default Product;