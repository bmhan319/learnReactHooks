import React, {useState} from 'react'

export default function Component2() {
  const intitialState = 0
  const [count, setCount] = useState(intitialState)

  const addCount = (num) => {
    setCount(count => count + num)
  }

  const resetCount = () => {
    setCount(intitialState)
  }

  return (
    <div className="Component2">
      <button onClick={ ()=>{addCount(1)} }>Add 1</button>
      <button onClick={ ()=>{addCount(-1)} }>Subtract 1</button>
      <button onClick={ resetCount }>Reset</button>
      <p>{count}</p>
    </div>
  )
}
