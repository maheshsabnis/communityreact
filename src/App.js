import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SelectComponent from './components/selectcomponent';
import { DataContext } from './components/datacontext';
import SelectContextComponent from './components/selectcontextcomponent';
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
    </div>
  );
}

export default App;
