import './App.css'
import { useState } from 'react'

function App(){

    let [count,setValue ]= useState(0)
    //let count = 0;
    const addValue = ()=> {
      //console.log("clicked",Math.random())
      count = count +1;
      setValue(count)
    }


    const removeValue = ()=>{
      count = count - 1;
      setValue(count)
    }

  return (
    <section>
    <h1>chai aur react</h1>
    <h2>counter value : {count}</h2>

    <button onClick={addValue}> Increase {count}</button>
    <br></br>
    <button onClick={removeValue}> Decrease {count}</button>
    </section>
  )
}

export default App
