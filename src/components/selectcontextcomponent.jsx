import React, {useContext} from 'react';
import { DataContext } from './datacontext';

const SelectContextComponent=()=>{

    // CReate a Subscription for the data
    // that will be received from the 'provider'
    // component
    
    let dataSource = useContext(DataContext);

    console.log('====================================');
    console.log(JSON.stringify(dataSource));
    console.log('====================================');

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
                <select>
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

export default SelectContextComponent;
