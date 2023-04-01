import React from 'react';


const SelectComponent=(props)=>{

    console.log('SelectComponent is Rendered...');


    const handleChange=(evt)=>{
        // the callbak of the 'props'
        // evt: is select Element's OnChange Event Args
        // evt.target: is the select element
        // evt.target.value: is the selected value
        // The 'selectedValue' is a JS Callback function
        // we are passing the selected value of HTMl select Element to the callback 
        props.selectedValue(evt.target.value);
    }
    if(props.dataSource === undefined || props.dataSource.length === 0){
        return (
            <div>
                <span>
                    <strong>No Data Available</strong>
                </span>
            </div>
        );
    } else {
        return(
            <div>
                {/* The bindableProperty will be the actual property
                  that is been bound from Parent-to-Child
                  to send and receive value updates
                  We are doing the explicit 'value' binding
                */}
                <select onChange={handleChange} className="form-control" 
                 value={props.bindableProperty}
                >
                    {
                        props.dataSource.map((e,i)=>(
                            <option key={i} value={e}>{e}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
};

export default SelectComponent;
