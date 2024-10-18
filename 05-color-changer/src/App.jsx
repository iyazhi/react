import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor]=useState('red')

  return (
  
  <div className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    >
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2  bottom-12'>
            <div className='px-3 py-1 rounded-md flex flex-wrap justify-center gap-3 bg-white shadow-lg '>

                <button onClick={()=> setColor('red')} className='px-3 py-1 outline-none rounded-full bg-red-500 text-white'>Red </button>
                <button onClick={()=>setColor('green')} className='px-3 py-1 outline-none rounded-full bg-green-500 text-white'>Green </button>
                <button onClick={()=>{setColor('blue')}} className='px-3 py-1 outline-none rounded-full bg-blue-500 text-white'>Blue </button>
                <button onClick={()=> setColor('yellow')} className='px-3 py-1 outline-none rounded-full bg-yellow-500 text-white'>Yellow </button>
                <button onClick={()=>setColor('black')} className='px-3 py-1 outline-none rounded-full bg-black text-white'>Black </button>
                <button onClick={()=>{setColor('pink')}} className='px-3 py-1 outline-none rounded-full bg-pink-500 text-white'>Pink </button>

            </div>
        </div>
  </div>
  
  )
}

export default App
