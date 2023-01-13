import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, asyncIncrement } from '@/store/features/counterSlice'

function Counter() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(increment({ step: 2 }))
  }
  const onClick2 = () => {
    dispatch(asyncIncrement({ step: 1 }))
  }
  return (
    <div>
      <div>Value: {count} </div>
      <button onClick={onClick}>Increment</button>
      <button onClick={onClick2}>Increment2</button>
    </div>
  )
}



export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <Counter />
    </main>
  )
}