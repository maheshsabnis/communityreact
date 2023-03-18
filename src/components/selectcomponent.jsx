import React from 'react';


const SelectComponent=(props)=>{
    const handleChange=(evt)=>{
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
                <select onChange={handleChange}>
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
