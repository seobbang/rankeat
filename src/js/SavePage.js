import React from "react";
import { ReactDOM } from "react";
import {Select} from "antd";
import {axios} from "axios";

const {Option} = Select;


const SavePage = () => {
    const onChange=() =>{

    }

    const [products, setProducts] = useState([]);
    useEffect(()=> {
      axios.get("http://localhost:3000/produts").then((result)=>{
        const products= result.data.products;
        setProducts(products);
      }).catch((e)=>{console.log(e);})
    },[])

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