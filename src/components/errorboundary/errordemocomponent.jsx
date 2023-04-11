import { useState } from "react";

const CounterComponent=()=>{
    let [x,setX] = useState(0);

    const increment=()=>{
        // if(x > 10)
        //   throw new Error('You have reached to max click.....');
        // else {
        //     setX(x++);
        // }  
        setX(x++);
    };


    const componentUI=()=>{
        return (<div className="container">
                    <h4>The Counter Component</h4>
                    <label>
                        <strong>
                            Value of x = {x}
                        </strong>
                    </label>
                    <button onClick={increment}>Counter Increment</button>    
                </div>);
    }

    const errorFallbackUI=(error)=>{
        return(
            <div className="container">
            <h4>The Counter Component</h4>
             <strong>
                Error Occured : {error.message}
             </strong>
        </div>
        );
    };
  // Use a simple trycatch for error handling
    try {
        if(x > 10){
            throw new Error('You have reached to max clicks');
        } else {
            return componentUI();
        }
    }catch(e){
        return errorFallbackUI(e);
    }

};


const MyParentComponent=()=>{
    return (
        <div className="container">
            <h2>I am the parent component</h2>
            <div>
                <strong>
                    Curretly rendering Counter:
                </strong>
                <hr/>
                <CounterComponent></CounterComponent>
            </div>
        </div>
    );
};

export default MyParentComponent;