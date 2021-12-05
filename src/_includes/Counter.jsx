import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>
        In the <code>Counter.jsx</code> component a new state variable is declared called <code>count</code>.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Add one
      </button>
      
      <p>
        You've had {count} glasses of water 💧
      </p>
    </div>
  )
}

export default Counter