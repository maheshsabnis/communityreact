import { useState } from "react";
import DataGridComponent from "./datagridcomponent";
import SelectComponent from "./selectcomponent";

const ProductFormConponent=()=>{
   const [product, setProduct] = useState({
     ProductId:0,
     ProductName:'',
     CategoryName:'',
     Manufacturer:'',
     Price:0
   });  

   const [products, setProducts] = useState([]);

   const catrgories = ['ECT', 'ECL', 'FOD', 'FSN'];
   const manufacturers = ['M1', 'M2', 'M3', 'M4'];

   const save=()=>{
     setProducts([...products, product]);
   };

   return (
    <div className="container">
        <h1>Product Information Form</h1>
        <div className="form-group">
            <label>Product Id</label>
            <input type="text" value={product.ProductId}
               className="form-control"
                onChange={(evt)=>setProduct({...product, 
                    ProductId: parseInt(evt.target.value)})}/>
        </div>
        <div className="form-group">
            <label>Product Name</label>
            <input type="text" value={product.ProductName}
               className="form-control"
               onChange={(evt)=>setProduct({...product, 
                ProductName: evt.target.value})}/>
        </div>
        <div className="form-group">
            <label>Category Name</label>
            {/* <input type="text" value={product.CategoryName}
               className="form-control"
               onChange={(evt)=>setProduct({...product, 
                CategoryName: evt.target.value})}
               /> */}

            <SelectComponent dataSource={catrgories}
               selectedValue={(val)=>setProduct({...product, CategoryName:val})}></SelectComponent>   
        </div>
        <div className="form-group">
            <label>Manyfacturer Name</label>
            {/* <input type="text" value={product.Manufacturer}
               className="form-control"
               onChange={(evt)=>setProduct({...product, 
                Manufacturer: evt.target.value})}
               /> */}
               <SelectComponent dataSource={manufacturers}
               selectedValue={(val)=>setProduct({...product, Manufacturer:val})}></SelectComponent>   
        </div>
        <div className="form-group">
            <label>Price</label>
            <input type="text" value={product.Price}
               className="form-control"
               onChange={(evt)=>setProduct({...product, 
                Price: parseInt(evt.target.value)})}
               />
        </div>
        <div className="btn btn-group-lg">
            <button className="btn btn-warning">New</button>
            <button className="btn btn-success"
              onClick={save}
            >Save</button>
        </div>
        <hr/>
         <DataGridComponent dataSource={products}></DataGridComponent>
    </div>
   );

};


export default ProductFormConponent;