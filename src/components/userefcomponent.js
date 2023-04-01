import React, { useEffect, useRef, useState } from 'react'

export default function UseRefDemoComponent() {
  const [val,setVal] = useState(0);
  const renderCount = useRef(null);

  useEffect(()=>{
    // renderCount.current = renderCount.current + 1;
  });

  const accessRenderCountFocus=()=>{
    // if(renderCount.current)
    //     // referring the input:text
    //      renderCount.current?.focus();
    // Accessing the DOMs
    console.log(renderCount.current.value);
  };


  return (
    <div>
      {/* <input type="text" value={val}
        onChange={(e)=> setVal(e.target.value)}
      /> */}

        <input type="text" ref={renderCount}/>

      <button onClick={accessRenderCountFocus}>Take Me to Render Text</button>

 
      <h2>
         Counter for rendering : {renderCount.current}
      </h2>
    </div>

  )
}
