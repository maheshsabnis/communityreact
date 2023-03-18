import React, {useContext} from 'react';
import { DataContext } from './datacontext';

const SelectContextEventComponent=()=>{

    // CReate a Subscription for the data
    // that will be received from the 'provider'
    // component
    
    let consumer = useContext(DataContext);

    console.log('====================================');
    console.log(JSON.stringify(consumer));
    console.log('====================================');

    // 1. Read the Data from the Consumer

    let dataSource = consumer[Object.keys(consumer)[0]];

    // 2. Read the callback

    let eventCallback = consumer[Object.keys(consumer)[1]];

    if(dataSource === undefined || dataSource.length === 0){
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
                <select onChange={(evt)=>eventCallback(evt.target.value)}>
                    {
                        dataSource.map((e,i)=>(
                            <option key={i} value={e}>{e}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
};

export default SelectContextEventComponent;
