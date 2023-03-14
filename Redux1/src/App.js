import React from 'react'
import Home from './Home'
import { useSelector } from 'react-redux'

function App() {
     const {c} = useSelector(state => state.custom)
     const {d} = useSelector(state => state.custom2)
  return (
    <div>
        <h1>REDUX PRACTICE</h1>
        <h2>{c}</h2>
        <h2>{d}</h2>
        <Home/>
    </div>
  )
}

export default App