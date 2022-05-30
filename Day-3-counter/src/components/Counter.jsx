import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div>
      <h2 data-testid="counter">Counter {counter}</h2>
      <button data-testid="addBtn" onClick={()=>setCounter(counter+5)}>ADD</button>
      <button data-testid="reduceBtn" onClick={()=>setCounter(counter-5)}>REDUCE</button>
    </div>
  )
}

export default Counter