import { useState, useEffect } from "react";
import ProductHttpService from "../../service/producthttpservice";
import { Link } from "react-router-dom";
 

const ProductListComponent=()=>{

    const [products,setProducts] = useState([]);
    const [message, setMessage] =useState('');

    const serv = new ProductHttpService();

    useEffect(()=>{
        // then() is success
        // catch() is fail
          serv.getProducts()
                  .then((resp)=>setProducts(resp.data))
                  .catch((error)=>setMessage(error.message));
       },[]); // <-- dependency parameter

       
       if(products == undefined || products.length === 0) {
         return (
            <div className="container">
                 <strong>
                    No Products to Display
                 </strong>
            </div>
         )
       }

       return(
        <div className="container">
             <h3>Product List</h3>
        <table className="table table-bordered table-striped">
        <thead>
            <tr>
               {
                 Object.keys(products[0]).map((header,index)=>(
                    <th key={index}>{header}</th>
                 ))
               }     
            </tr>
        </thead>
        <tbody>
            {
                products.map((e,i)=>(
                    <tr key={i}>
                        {
                            Object.keys(e).map((header,index)=>(
                                <td key={index}>{e[header]}</td>
                                
                     ))
                     
               }
                    
                        <td>
                           <button className="btn btn-danger" >
                            
                             <Link to={`/edit/${e.ProductRowId}`}>Edit</Link> 
                            </button> 
                        </td>  
                    </tr>
                ))
            }
        </tbody>
     </table>
        </div>
       );

    
};

export default ProductListComponent;