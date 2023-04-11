import React, { Component, useState } from "react";

class ErrorCoundaryComponent extends Component {
    constructor(props){
        super(props);
        // define a local state
        this.state = {
            errorMessage:''
        };
    }

    static getDerivedStateFromError(error){
        // listen to the error from the 
        // child component(s)
        // executing inside the ErrorBoundary
        // component
        return {
            errorMessage: error.toString()
        };
    }
    // read tye error message
    // like the 'catch()' block
    componentDidCatch=(error, log)=>{
        console.log('====================================')
        console.log(`Error Occured ${error.toString()}`, log.componentStack);
        console.log('====================================')
    };

    // define the rendering
    // if no error render the child component 
    // normally else render the fallback UI
    render(){
        if(this.state.errorMessage){
            return(<div className="container">
            <h4>The Counter Component</h4>
             <strong>
                Error Occured : {this.state.errorMessage}
             </strong>
        </div>);
        } else {
            // keep the child rendering
            // props, the immutable object
            // tat represents values for each 
            // component and
            // props.children, represents 
            // the current correct state of each
            // component 
            return this.props.children;
        }
    }

}



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
  //  throw exception when error occurred (No Catch)
   
        if(x > 10){
            throw new Error('You have reached to max clicks');
        } else {
            return componentUI();
        }
   

};


const MyNewParentComponent=()=>{
    return (
        <div className="container">
            <h2>I am the parent component</h2>
            {/* Render all children inside the scope
              of error boundary
            */}
            <ErrorCoundaryComponent>
                {/* this.props.children 
                 the 'getDerivedStateFromError'
                 will be executed when the
                 child component throws an error
                */}
                <div>
                    <strong>
                        Curretly rendering Counter:
                    </strong>
                    <hr/>
                    <CounterComponent></CounterComponent>
                </div>
            </ErrorCoundaryComponent>
            
        </div>
    );
};

export default MyNewParentComponent;