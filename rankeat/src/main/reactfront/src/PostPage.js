import React from "react";
import { ReactDOM } from "react-dom;
import {Route, Routes} from "react-router-dom";

const PostPage=(props) => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:3000/products"),then((result) => {
        const products= result.data.products;
        setProducts(products);}).catch((e)=>console.log(e);)
      })
    },[])


    return(
        <div className="button">
            <button>#분위기가 좋은</button>
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
        <div className="button">
            <button>#가성비가 좋은</button>
        </div>
        <div className="button">
            <button>#감성카페</button>
        </div>
        <div className="button">
            <button>#지역핫플레이스</button>
        </div>

        
    )
}