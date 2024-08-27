import React, { useRef, useState } from 'react'

const App = () => {
  const boxRef = useRef(null)

  const [num, setNum] = useState(0)

  const btnClicked = ()=>{
    boxRef.current.style.backgroundColor = "royalblue"
    boxRef.current.innerHTML = num
    setNum(num+100)
  }
  return (
    <div>
      <div id="box" ref={boxRef}>
         
      </div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App



// DOM 

// - Selection of an Element 
// - Changing HTML 
// - Changing CSS 
// - Event Listener 