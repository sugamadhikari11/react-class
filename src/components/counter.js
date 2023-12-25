import React from 'react'
import { useState } from 'react';
import './counter.css'

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
     <div className='counter-contain'>
      <p>
      <h1>Hello I am counter!</h1>
      </p>
      <div className="button-row">
      <button id="sub" onClick={subButton}>-</button>
      <span id="counter">{count}</span>
      <button id="add" onClick={addButton}>+</button>
      </div>
      <button onClick={reset} className='uniq-butt'>Reset</button>
     </div>
     {count !== 0 ?<div className='counter-contain'>
      {count} is {count%2 ===0 ? "Even": "Odd"}
     </div> : null}
      
     </div>
    );
  
    
}

export default Counter;