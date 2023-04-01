import { useState, useEffect } from "react";
import DataGridComponent from "./datagridcomponent";
import SelectComponent from "./selectcomponent";
import ProductHttpService from './../service/producthttpservice';

const ProductFormConponent=()=>{
  // setProduct is 'DispatchAction' for the
  // react's state aka Component's state
   const [product, setProduct] = useState({
     ProductRowId:0,
     ProductId:'',
     ProductName:'',
     CategoryName:'',
     Manufacturer:'',
     Description:'',
     BasePrice:0
   });  

   const [products, setProducts] = useState([]);
   const [message, setMessage] =useState('');
   const serv = new ProductHttpService();
   const catrgories = ['ECT', 'ECL', 'FOD', 'FSN'];
   const manufacturers = ['M1', 'M2', 'M3', 'M4'];
   
   // use useEffect() to make an AJAX call

   useEffect(()=>{
    // then() is success
    // catch() is fail
      serv.getProducts()
              .then((resp)=>setProducts(resp.data))
              .catch((error)=>setMessage(error.message));
   },[]); // <-- dependency parameter


  const clear=()=>{
    setProduct({
      ProductRowId:0,
      ProductId:'',
      ProductName:'',
      CategoryName:'',
      Manufacturer:'',
      Description:'',
      BasePrice:0
    });
  };
   const save=()=>{
      serv.postProduct(product)
          .then((resp)=>{
            setProducts([...products, resp.data]);
            setMessage('Save is Successful');  
             
          })
          .catch((error)=>setMessage(error.message));
   };
   return (
    <div className="container">
        <h1>Product Information Form</h1>
        <div className="form-group">
            <label>Product Row Id</label>
            <input type="text" value={product.ProductRowId}
               className="form-control"
                onChange={(evt)=>setProduct({...product, 
                    ProductRowId: parseInt(evt.target.value)})}/>
        </div>
        <div className="form-group">
            <label>Product Id</label>
            <input type="text" value={product.ProductId}
               className="form-control"
                onChange={(evt)=>setProduct({...product, 
                    ProductId: evt.target.value})}/>
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
            bindableProperty={product.CategoryName}
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
                bindableProperty={product.Manufacturer}
               selectedValue={(val)=>setProduct({...product, Manufacturer:val})}></SelectComponent>   
        </div>
        <div className="form-group">
            <label>Description</label>
            <textarea  value={product.Description}
               className="form-control"
               onChange={(evt)=>setProduct({...product, 
                Description: evt.target.value})}/>
        </div>
        <div className="form-group">
            <label>Base Price</label>
            <input type="text" value={product.BasePrice}
               className="form-control"
               onChange={(evt)=>setProduct({...product, 
                BasePrice: parseInt(evt.target.value)})}
               />
        </div>
        <div className="btn btn-group-lg">
            <button className="btn btn-warning" onClick={clear}>New</button>
            <button className="btn btn-success"
              onClick={save}
            >Save</button>
        </div>
        <br/>
         <div className="container">
           <strong>
            {message}
           </strong>
         </div>
        <hr/>
         <DataGridComponent dataSource={products}></DataGridComponent>
    </div>
   );

};


export default ProductFormConponent;