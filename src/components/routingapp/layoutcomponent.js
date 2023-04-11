import { Link, Outlet } from "react-router-dom";

const LayoutComponent=()=>{
    return (
        <div className="container">
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">Products List</Link>
                        </td>
                        <td>
                            <Link to="/create">Create Product</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
           
            {/* Components being navigated will be loaded here
              the 'index' in ROute will be the default component
               that will be injected in the Outlet 
            */}
            <Outlet/>
        </div>
    );
};
export default LayoutComponent;