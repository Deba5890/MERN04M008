import { useEffect, useRef, useState } from 'react'
import './App.css'


export const themeContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  // syntax
  // useEffect(() => {
  // }, [dependencies])

  // case 1
  // it will execute at every render
  // useEffect(()=>{
  //   console.log("this is the side effect")
  // })

  // case 2
  // it will execute at the first render only
  // useEffect(() => {
  //   console.log("this is the effect code")
  // }, [])

  // case 3
  // it will execute based on the dependencies
  // useEffect(()=>{
  //   console.log("this dep block");
  // },[count]);
  useEffect(() => {
    console.log(btn.current)
  })

    function handleChangeColor(){
    btn.current.style.backgroundColor="red"
  }
  return (
    <>
     
      <h1>hii</h1>
      count:{count}
      
      <br/>
      <div>
        <button onClick={() => setCount(count => count + 1)}>Inc</button> <br />
        <button onClick={() => setCount(count => count - 1)}>Dec</button>
      </div> 

      <themeContext.Provider value={"dark"} >
        <ChildA count={count} ></ChildA>
      </themeContext.Provider>  

      <br />
      
      <div>
        <button ref={btn} onClick={handleChangeColor}>Change color</button>
      </div>  
 
    </>
  )
}

export default App
