import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectComponent from "../selectcomponent";
import ProductHttpService from "../../service/producthttpservice";

const CreateProductComponent=()=>{
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

      // define navigation hook object
      const navigate = useNavigate();


       const save=()=>{
        try {
            serv.postProduct(product)
            .then((resp)=>{
             
              setMessage('Save is Successful');  
              // Navigate to the root in the ROute Table
              // In our case it is LayoutComponent
              // and LayoutComponent has 'index' route
              // for the  'ProductListComponent'       
               navigate("/");   
            })
            .catch((error)=>setMessage(error.message));
        }catch(e){

        }
          
       };
      return (
        <div className="container">
            
            <h1>Product Information Form</h1>
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

export default CreateProductComponent;