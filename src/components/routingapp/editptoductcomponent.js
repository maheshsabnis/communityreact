import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SelectComponent from "../selectcomponent";
import ProductHttpService from "../../service/producthttpservice";

const EditProductComponent=()=>{
    const [product, setProduct] = useState({
        ProductRowId:0,
        ProductId:'',
        ProductName:'',
        CategoryName:'',
        Manufacturer:'',
        Description:'',
        BasePrice:0
      });  
      const [message, setMessage] = useState('');
      const serv = new ProductHttpService();
      const catrgories = ['ECT', 'ECL', 'FOD', 'FSN'];
      const manufacturers = ['M1', 'M2', 'M3', 'M4'];

      // define hook objects
      const navigate = useNavigate();
      const params = useParams();
      // Read the Parameter value from the Route URL 
      const id = parseInt(params.productrowid);

      useEffect(()=>{
        // get the record that is to be edited
        serv.getProduct(id)
            .then((resp)=>{
                setProduct(resp.data);
            })
            .catch((error)=>{
                setMessage(`Product Read Filed ${error.message}`);
            });
      },[]);



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
          serv.putProduct(id,product)
              .then((resp)=>{
               
                setMessage('Save is Successful');  
                navigate("/");
                 
              })
              .catch((error)=>setMessage(error.message));
       };
      return (
        <div className="container">
            
            <h1>Edit Product</h1>
            <div className="form-group">
                <label>Product Row Id</label>
                <input type="text" value={product.ProductRowId}
                 name="ProductRowId"
                  readOnly
                   className="form-control"
                    onChange={(evt)=>setProduct({...product, 
                        ProductRowId: parseInt(evt.target.value)})}/>
            </div>
            <div className="form-group">
                <label>Product Id</label>
                <input type="text" value={product.ProductId}
                  name="ProductId"
                   className="form-control"
                    onChange={(evt)=>setProduct({...product, 
                        ProductId: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" value={product.ProductName}
                   className="form-control"
                   name="ProductName"
                   onChange={(evt)=>setProduct({...product, 
                    ProductName: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Category Name</label>
                
    
                <SelectComponent dataSource={catrgories}
                bindableProperty={product.CategoryName}
                   selectedValue={(val)=>setProduct({...product, CategoryName:val})}></SelectComponent>   
            </div>
            <div className="form-group">
                <label>Manyfacturer Name</label>
                 
                   <SelectComponent dataSource={manufacturers}
                    bindableProperty={product.Manufacturer}
                   selectedValue={(val)=>setProduct({...product, Manufacturer:val})}></SelectComponent>   
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea  value={product.Description}
                  name="Description"
                   className="form-control"
                   onChange={(evt)=>setProduct({...product, 
                    Description: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Base Price</label>
                <input type="text" value={product.BasePrice}
                  name="BasePrice"
                   className="form-control"
                   onChange={(evt)=>setProduct({...product, 
                    BasePrice: parseInt(evt.target.value)})}
                   />
            </div>
            <div className="btn btn-group-lg">
                <button className="btn btn-warning" onClick={clear}>New</button>
                <button className="btn btn-success" type="button"
                  onClick={save}
                >Save</button>
            </div>
          
            <br/>
             
           
    
        </div>
       );
};

export default EditProductComponent;