import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./layoutcomponent";
import ProductListComponent from "./productslistcomponent";
import CreateProductComponent from "./createproductcomponent";
import EditProductComponent from "./editptoductcomponent";

const MainRoutingComponent =()=>{
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<LayoutComponent/>}>
                    <Route index element={<ProductListComponent/>}/>
                    <Route path="/create" element={<CreateProductComponent/>}/>
                    <Route path="/edit/:productrowid" element={<EditProductComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default MainRoutingComponent;