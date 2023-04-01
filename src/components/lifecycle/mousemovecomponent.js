import React, { useState } from 'react'
import { useEffect } from 'react';

export default function MouseMoveComponent() {
   const [x,setX] = useState(0); 
   const [y,setY] = useState(0); 

   const getPositions=(evt)=>{
       setX(evt.clientX);
       setY(evt.clientY); 

       console.log(`x = {x} and y = {y}`);
   };

   useEffect(()=>{
      // subscribe to the mousemove event
      // componentDidMount lifecycle hook
      window.addEventListener('mousemove', getPositions);
      
      // Kill the globla event subscription
      return(()=>{
        // componentWillUnMount lifecycle hook
        window.removeEventListener('mousemove', getPositions);
      });
      
   },[]);


  return (
    <div className='container'>
        <h2>Capture the Mouse Movement</h2>
        <div className='container'>
            <strong>
                X-positio : {x} &&& Y-position: {y}
            </strong>
        </div>
    </div>
  )
}
