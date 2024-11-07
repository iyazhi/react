import React, { useState } from "react";

function MyButton(){
     [count, setCount] = useState(0);
    return (<button onClick={ () => { 
        console.log(count);
        setCount(count+1)} } 
        style={{backgroundColor:"green", padding:"12px", border : "2px bold black"}}> Click Me </button>)
}

export default MyButton