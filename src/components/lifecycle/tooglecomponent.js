import React, { useState } from 'react'
import MouseMoveComponent from './mousemovecomponent';

function ToggleComponent() {
  const [show,setShow] = useState(true);  
  return (
    <div className='container'>
        <button  onClick={()=>{
            setShow(!show);
        }}>Toggle</button>
        {
            show && <MouseMoveComponent></MouseMoveComponent>
        }
        <hr/>
        <div className='container'>
            <strong>
                CUrrent Showing the Toggle Component
            </strong>
        </div>
    </div>
  )
}

export default ToggleComponent