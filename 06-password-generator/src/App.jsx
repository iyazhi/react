import { useState, useCallback ,useEffect} from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let  [includeNums , setNums] = useState(false);
  let [includeChar , setChar] = useState(false);
  let [password , setPassword] = useState("")
  
  let passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNums) str += "1234567890";
    if (includeChar) str += "[]{}()!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass)

    setPassword(pass)
  }, [length, includeChar , includeNums ,setPassword])
  
  useEffect( () => { 
     passwordGenerator()
    
  }, [length, includeNums ,includeChar, passwordGenerator]
  )




  return (
  <>
    <h2 className='p-4 text-4xl text-center font-bold text-white'>Password Generator</h2>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-8 text-orange-500 bg-gray-300'>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
            <input
            className='outline-none w-full py-1 px-2'
            type="text"
            value={password}
            placeholder='generating password...'
            readOnly
             />
            <button className='bg-green-400 text-white outline-none px-3 py-0.5 rounded-md shrink-0'>
              copy
            </button>
        </div> 

    <div className='flex text-sm gap-x-2 rounded-md'>
      <div className='flex items-center gap-x-1'>
       <input
        type="range"
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label> length : {length}</label>  
      </div>


      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox" 
         value={includeNums}
         id='inputNumber'
          onChange={()=>
            setNums((prev)=>(!prev))
          }
          />
         <label >Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox" 
         value={includeChar}
         id='inputChar'
          onChange={()=>
            setChar((prev)=>(!prev))
          }
          />
         <label> Character</label>
      </div>

    </div>
    </div>
  </>
  )
}

export default App
