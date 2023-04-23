import React from "react"
export default function Counter(){
    // let count = 0
    const[count,setCount]=React.useState(0)
    function IncrementCounter(){
           setCount(count+1)
           console.log(count)
    }
    return(
    <div>
        <h1>Counter</h1>
        <h2>current value of counter is {count}</h2>
        <button onClick={IncrementCounter}>Click here to Increment</button>
    </div>)
}