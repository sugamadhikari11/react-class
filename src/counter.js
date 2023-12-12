import React from 'react'
import { useState } from 'react';

function Counter() {

    const [count, setcount] = useState(0)
    const [initialCount, setInitialCount] = useState(0);
  
    const addButton = function(){
      setcount(count + 1)
    }
    const subButton = () => {
      if (count > 0){
        setcount(count - 1)
      }
    }
    const reset = ()=>{
      setcount(initialCount);
    }
      
    return (
      <div>
     <div className='container'>
      <p>
      <h1>Hello world! I am counter!</h1>
      </p>
      <button id="sub" onClick={subButton}>-</button>
      <span id="counter">{count}</span>
      <button id="add" onClick={addButton}>+</button>
      <button onClick={reset}>Reset</button>
     </div>
     {count !== 0 ?<div className='container'>
      {count} is {count%2 ===0 ? "Even": "Odd"}
     </div> : null}
      
     </div>
    );
  
    
}

export default Counter;