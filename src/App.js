import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SelectComponent from './components/selectcomponent';
import { DataContext } from './components/datacontext';
import SelectContextComponent from './components/selectcontextcomponent';
import SelectContextEventComponent from './components/selectcontexteventcomponent';
// Three Parts 
// 1. UI
// 2. Data Stystem aka Property System aka State
// 3. Behaviors 
// ReUse, Individual Packaging, Compositional Nature
// Communication Across Components
// Sharing State
// Having Global State
function App(props) {
  const [x, setX]  = useState(10);
  const [data, setData] = useState(['Tejas','Mahesh','Ramesh', 'Ram']);
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  return (
    <div className="App">
       <h3>{props.msg}</h3>   
       <input value={x} onChange={(evt)=> setX(parseInt(evt.target.value))}/>
       <br/>
       <div>{x}</div>
       <hr/>
       <SelectComponent dataSource={data}
         selectedValue={(data)=>setName(data)}/>
        <hr/>
       <div>
          <strong>{name}</strong>
        </div>  
        <hr/>
        <div>
          <h6>Passing Data to Child Component using DataContext</h6>
          {/* The State 'data' is passed to 
            DataContext object
           */}
          <DataContext.Provider value={data}>
            <SelectContextComponent></SelectContextComponent>
          </DataContext.Provider>
        </div>
        <hr/>
        <div>
        <h6>Passing Data to Child Component using DataContext with data and calback</h6>
           {/* data : the state that is passed to consumer */}
           {/* setName: the callback used by useState() to update the state 
             in Provider component
           */}
           <DataContext.Provider value={{data, setName1}}>
             <SelectContextEventComponent></SelectContextEventComponent>
           </DataContext.Provider>
           <hr/>
           <strong>
              Data Received from Child : {name1}
           </strong>
        </div>
    </div>
  );
}

export default App;
