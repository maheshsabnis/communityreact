import React, {Fragment, Suspense} from "react";
const ProductComponent = React.lazy(()=>
  import ('./../productformcomponent')
);
const LazyComponent=()=>{
    return(
        <Fragment>
            <Suspense fallback={
                <div>
                    <strong>
                        Waiting for the compoennt to load
                    </strong>
                </div>
            }>
                {
                    /* Load the Component withing
                      the scope of the LAzyComponent
                    */     
                }
                <ProductComponent></ProductComponent>
            </Suspense>
        </Fragment>
    );
};

export default LazyComponent;