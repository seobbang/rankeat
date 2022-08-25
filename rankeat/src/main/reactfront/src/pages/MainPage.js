/*import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { Input } from "antd";
import axios from 'axios';
const {Search} = Input;

//search 검색창.
function MainPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/products"),then((result) => {
      const products= result.data.products;
      setProducts(products);}).catch((e)=>console.log(e);)
    })
  },[])

  
  return (
    <AppLayout>
    <div className="tab">
      <div class= "tab-container">

      </div>
      <Search placeholder ="오늘의 추천맛집은? style= {{width : 200,}}/>
    </div>
    <div className="Hashtag">
       <div class="Hashtag-button-1">
        <button>#분위기가 좋은</button>
        <button>#지역핫플레이스</button>
        <button>#감성카페</button>
        <button>#가성비가 좋은</button>


       </div>
       <div class="Hashtag-button-2">
        <button>#이색적인</button>
        <button>#로맨틱한</button>
        <button>#너무 좋은</button>
        <button>#고급스러운</button>
        <button>술집</button>

        
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
    </AppLayout>
  );
};


export default MainPage;*/

